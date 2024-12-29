import { useState } from "react";
import Input from "./input";

function Edu({ data }) {
  const [eduData, setEduData] = useState({
    college: ``,
    degree: ``,
    city: ``,
    period: ``,
  });

  function handleCollege(e) {
    setEduData({
      ...eduData,
      college: e.target.value,
    });
    data.college = e.target.value;
  }

  function handleDegree(e) {
    setEduData({
      ...eduData,
      degree: e.target.value,
    });
    data.degree = e.target.value;
  }

  function handleCity(e) {
    setEduData({
      ...eduData,
      city: e.target.value,
    });
    data.city = e.target.value;
  }

  function handlePeriod(e) {
    setEduData({
      ...eduData,
      period: e.target.value,
    });
    data.period = e.target.value;
  }

  return (
    <>
      <div className="basic-container flex flex-wrap gap-3">
        <Input
          field={`College / University`}
          type={`text`}
          value={eduData.college}
          func={handleCollege}
        />
        <Input
          field={`Degree`}
          type={`text`}
          value={eduData.degree}
          func={handleDegree}
        />
        <Input
          field={`City`}
          type={`text`}
          value={eduData.city}
          func={handleCity}
        />
        <Input
          field={`Period`}
          type={`text`}
          value={eduData.period}
          func={handlePeriod}
        />
      </div>
    </>
  );
}

export default Edu;
