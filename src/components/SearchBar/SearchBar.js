import { React, useState } from 'react';



function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Search term:", event.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="SearchBar">
      <input 
        type="text" placeholder="Search a title.." onChange={handleChange}/>
      <button className="SearchButton" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};


export default SearchBar;