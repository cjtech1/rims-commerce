"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });
  const router = useRouter();

  const checkAuth = async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401) {
          setAuthState({ user: null, isLoading: false, error: null });
          return null;
        }
        throw new Error("Failed to check authentication");
      }

      const data = await response.json();
      const user = data.user;
      
      setAuthState({ user, isLoading: false, error: null });
      return user;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Authentication check failed";
      setAuthState({ user: null, isLoading: false, error: errorMessage });
      return null;
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setAuthState({ user: null, isLoading: false, error: null });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const redirectToLogin = (from?: string) => {
    const loginUrl = from ? `/login?from=${encodeURIComponent(from)}` : "/login";
    router.push(loginUrl);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    ...authState,
    checkAuth,
    logout,
    redirectToLogin,
    isAuthenticated: !!authState.user && !authState.isLoading,
  };
}

// Higher-order component for protecting client components
export function withAuth<T extends object>(
  Component: React.ComponentType<T>,
  options?: {
    redirectTo?: string;
    loadingComponent?: React.ComponentType;
  }
) {
  return function AuthenticatedComponent(props: T) {
    const { user, isLoading, redirectToLogin } = useAuth();
    const LoadingComponent = options?.loadingComponent || DefaultLoadingComponent;

    useEffect(() => {
      if (!isLoading && !user) {
        redirectToLogin(options?.redirectTo || window.location.pathname);
      }
    }, [user, isLoading, redirectToLogin]);

    if (isLoading) {
      return <LoadingComponent />;
    }

    if (!user) {
      return null; // Will redirect in useEffect
    }

    return <Component {...props} />;
  };
}

const DefaultLoadingComponent = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex items-center space-x-2 text-gray-500">
      <svg
        className="animate-spin h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span>Checking authentication...</span>
    </div>
  </div>
);