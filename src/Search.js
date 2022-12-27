import React, { useContext } from "react";
import { AppContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useContext(AppContext);

  return (
    <>
      <div className="container">
        <div className="col-md-6 col-sm-8 mx-auto text-center">
          <h2>Search Your Favourite Movie</h2>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                className="form-control col-sm-8"
                placeholder="Search Here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="text-center">
            <p>{isError.show && isError.msg}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
