import React from "react";

/**
 * A simple input component for searching notes.
 * @param {Object} props - The component's props.
 * @param {function(React.ChangeEvent<HTMLInputElement>): void} props.onSearch - The function to call when the input value changes.
 * @returns {JSX.Element} The rendered component.
 */
const SearchInput = ({onSearch}) => {
  return (
    <div>
      <input onChange={onSearch} style={{ minWidth: "400px" }} type={"text"} placeholder="Cari catatan ..." />
    </div>
  );
};

export default SearchInput;
