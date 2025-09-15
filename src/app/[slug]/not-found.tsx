import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the product you are looking for doesn&apos;t exist or has been
          removed.
        </p>
        <div className="space-x-4">
          <Link
            href="/list"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Browse All Products
          </Link>
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
