import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../UseGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = UseGoogleSearch(term);

  console.log(data);
  return (
    <div className="search-page">
      <div className="search-page-header">
        <h1>{term}</h1>
      </div>
      <div className="search-page-results"></div>
    </div>
  );
}

export default SearchPage;
