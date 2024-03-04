"use client";
import LibraryCard from "@/components/LibraryCard";
import React, { useEffect, useState } from "react";

const javascriptOptions = [
  {
    id: 1,
    name: "paginate",
    value: "paginate",
  },
  {
    id: 2,
    name: "authentication",
    value: "authentication",
  },
  {
    id: 3,
    name: "carousel",
    value: "carousel",
  },
  {
    id: 4,
    name: "markdown",
    value: "markdown",
  },
  {
    id: 5,
    name: "scroll",
    value: "scroll",
  },
];

const Javascript = () => {
  const [selectedOption, setSelectedOption] = useState("paginate");
  const [selectedLibs, setSelectedLibs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSelectedLibs() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.npms.io/v2/search?q=keywords:${selectedOption}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setSelectedLibs(data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getSelectedLibs();
  }, [selectedOption]);

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col w-full px-40 py-40">
      <h3>
        Find Javascript Libraries based on the functionality you are
        Implementing
      </h3>
      <div className="flex items-center mt-8">
        <h1>Javascript</h1>
        <div className="flex ml-5">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="flex outline-none rounded-md p-3 border border-grey"
          >
            <option value="">Select an option</option>
            {javascriptOptions.map((item) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-8 py-10">
        {selectedLibs.map((lib: any) => (
          <LibraryCard key={lib.name} library={lib} />
        ))}
      </div>
    </div>
  );
};

export default Javascript;
