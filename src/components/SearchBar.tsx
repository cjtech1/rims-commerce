"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchValue) {
      router.push(`/list?name=${searchValue}`);
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
      <button type="submit">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
