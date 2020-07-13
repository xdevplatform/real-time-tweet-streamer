import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="ui active centered large inline loader">
        <img
          className="ui image"
          src="/Twitter_Logo_Blue.png"
          alt="Twitter Logo"
        />
      </div>
    </div>
  );
};

export default Spinner;
