import { useState } from "react";

function Edu() {
  return (
    <>
      <div className="basic-container flex flex-wrap gap-3">
        <label>
          College/University
          <input type="text" placeholder="College/University" />
        </label>
        <label>
          Degree
          <input type="text" placeholder="Degree" />
        </label>
        <label>
          City
          <input type="text" placeholder="City" />
        </label>
        <label>
          Time Period
          <input type="text" placeholder="Period" />
        </label>
      </div>
    </>
  );
}

export default Edu;
