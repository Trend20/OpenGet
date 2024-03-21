import React from "react";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="flex w-1/2 md:w-1/4">
      <input
        type="text"
        placeholder="Search.."
        value={value}
        onChange={onChange}
        className="border border-grey rounded outline-none px-3 py-2 mt-3 mb-5 w-full"
      />
    </div>
  );
};

export default Search;
