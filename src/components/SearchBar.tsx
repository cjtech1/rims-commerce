"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  // Optional: pre-fill the input when on /list with existing ?name=
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const current = params.get("name") || "";
      if (current && !searchValue) setSearchValue(current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchValue) {
      router.push(`/list?name=${encodeURIComponent(searchValue)}`);
    }
  }

  return (
    <form
      className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" aria-label="Search">
        <Image src="/search.png" alt="Search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
