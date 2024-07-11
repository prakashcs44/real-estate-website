import React from "react";

function DropDown({ options, ...props }) {
  return (
    <select   {...props} className="border border-[#7A7A7A] px-2 py-2">
      
      {options.map((opt) => (
        <option  value={opt}>{opt}</option>
      ))}
    </select>
  );
}

export default DropDown;