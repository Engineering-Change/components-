import React, { useState } from "react";

const DropdownSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <select
          className="w-full border border-neutral-300 rounded-md text-neutral-500 p-2 bg-white focus:border-neutral-500 focus:ring-neutral-500"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option className="text-neutral-500" value="one">
            One
          </option>
          <option className="text-neutral-500" value="two">
            Two
          </option>
          <option className="text-neutral-500" value="three">
            Three
          </option>
        </select>
      </div>
    </div>
  );
};

export default DropdownSelect;
