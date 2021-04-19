import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const searchBtn = (e) => {
    e.preventDefault();
    console.log("this is search", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    //History btn
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={searchBtn} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            className="buttons-hidden"
            type="submit"
            onClick={searchBtn}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="buttons-hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
