import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
          isToggled ? "bg-neutral-400" : "bg-neutral-300"
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isToggled ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
