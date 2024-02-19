"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Languages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=all`
        );
        const platformsData = response.data;
        console.log(platformsData);
        setLanguages(platformsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching platforms:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return <div>Languages</div>;
};

export default Languages;
