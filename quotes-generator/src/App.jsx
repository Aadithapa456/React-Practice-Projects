import React from "react";
import Card from "./components/Card";
import { useEffect, useState } from "react";
const App = () => {
  const [first, setFirst] = useState([]);
  const [category, setCategory] = useState("Architecture");

  async function fetchQuotes() {
    let currentCategoryValue = category;
    // Shows error pop-up if user hasn't selected anything
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${currentCategoryValue}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "oe+5lXQ7Ryyu6lshrNHzSQ==Qsci9FoIpuewbxUy",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      setFirst(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  useEffect(() => {
    fetchQuotes();
  },[category]);
  console.log(category);
  return (
    <div className="flex justify-center items-center h-full">
      <Card data={first} onCategoryChange={setCategory} onNewQuote={() => fetchQuotes()} />
    </div>
  );
};

export default App;
