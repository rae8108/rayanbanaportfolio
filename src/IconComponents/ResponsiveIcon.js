import React from "react";
import responsiveicon from "./responsive.jpeg";

export default function responsive() {
  return (
    <div>
      <img
        src={responsiveicon}
        alt="responsive-icon"
        className="responsive-icon"
      />
    </div>
  );
}
