import MainForm from "./components/main-form.jsx";
import AsideCv from "./components/aside.jsx";
import { useState } from "react";

function App() {
  const [basicData, setBasicData] = useState({
    name: `Jake Gutierrez`,
    phone: `xxx-xxx-xxxx`,
    mail: `g@odinprojects.edu`,
    github: `github.com/jakeyang`,
  });

  const [eduData, setEduData] = useState({
    college: `Southwestern University`,
    degree: `Bachelor of Arts in Computer Science, Minor in Business`,
    city: `Georgetown, TX`,
    period: `Aug. 2018 - May 2021`,
  });

  const handleName = (e) => {
    setBasicData({
      ...basicData,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setBasicData({
      ...basicData,
      phone: e.target.value,
    });
  };

  const handleMail = (e) => {
    setBasicData({
      ...basicData,
      mail: e.target.value,
    });
  };

  const handleGithub = (e) => {
    setBasicData({
      ...basicData,
      github: e.target.value,
    });
  };

  return (
    <>
      <div className="main-container w-full h-full grid gap-5 p-5">
        <MainForm
          basicData={basicData}
          handleName={handleName}
          handlePhone={handlePhone}
          handleMail={handleMail}
          handleGithub={handleGithub}
          eduData={eduData}
        />
        <AsideCv basicData={basicData} eduData={eduData} />
      </div>
    </>
  );
}

export default App;
