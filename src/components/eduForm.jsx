import { useState } from "react";
import Input from "./input";

function Edu({ data, handleCollege, handleDegree, handleCity, handlePeriod }) {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        <Input
          field={`College / University`}
          type={`text`}
          value={data.college}
          func={handleCollege}
        />
        <Input
          field={`Degree`}
          type={`text`}
          value={data.degree}
          func={handleDegree}
        />
        <Input
          field={`City`}
          type={`text`}
          value={data.city}
          func={handleCity}
        />
        <Input
          field={`Period`}
          type={`text`}
          value={data.period}
          func={handlePeriod}
        />
      </div>
    </>
  );
}

export default Edu;
