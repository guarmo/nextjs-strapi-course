import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter()
    
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      router.push(`/events/search?term=${term}`)
      setTerm("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search events"
        />
      </form>
    </div>
  );
};

export default Search;
