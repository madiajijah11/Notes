import React from "react";

const SearchInput = ({onSearch}) => {
  return (
    <div>
      <input onChange={onSearch} style={{ minWidth: "400px" }} type={"text"} placeholder="Cari catatan ..." />
    </div>
  );
};

export default SearchInput;
