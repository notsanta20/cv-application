import MainForm from "./components/main-form.jsx";
import AsideCv from "./components/aside.jsx";
import { useState } from "react";

function App() {
  const [basicData, setBasicData] = useState({
    name: `Example CV`,
    phone: `xxx-xxx-xxxx`,
    mail: `g@odinprojects.edu`,
    github: `github.com/exmaple`,
  });

  const [eduData, setEduData] = useState({
    college: `Southwestern University`,
    degree: `Bachelor of Arts in Computer Science, Minor in Business`,
    city: `Georgetown, TX`,
    period: `Aug. 2018 - May 2021`,
  });

  const [eduData2, setEduData2] = useState({
    college: `Blinn College`,
    degree: `Associate’s in Liberal Arts`,
    city: `Bryan, TX`,
    period: `Aug. 2014 – May 2018`,
  });

  const [desData, setDesData] = useState({
    position: `Undergraduate Research Assistant`,
    company: `Texas A&M University`,
    expCity: `College Station, TX`,
    exp: `June 2020 – Present`,
    des: `• Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems
• Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data
• Explored ways to visualize GitHub collaboration in a classroom setting`,
  });

  const [desData2, setDesData2] = useState({
    position: `Information Technology Support Specialist`,
    company: `Southwestern University`,
    expCity: `Georgetown, TX`,
    exp: `Sep. 2018 – Present`,
    des: `• Communicate with managers to set up campus computers used on campus
• Assess and troubleshoot computer problems brought by students, faculty and staff
• Maintain upkeep of computers, classroom equipment, and 200 printers across campus`,
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

  const handleCollege = (e) => {
    setEduData({
      ...eduData,
      college: e.target.value,
    });
  };

  const handleDegree = (e) => {
    setEduData({
      ...eduData,
      degree: e.target.value,
    });
  };

  const handleCity = (e) => {
    setEduData({
      ...eduData,
      city: e.target.value,
    });
  };

  const handlePeriod = (e) => {
    setEduData({
      ...eduData,
      period: e.target.value,
    });
  };

  const handlePosition = (e) => {
    setDesData({
      ...desData,
      position: e.target.value,
    });
  };

  const handleCompany = (e) => {
    setDesData({
      ...desData,
      company: e.target.value,
    });
  };

  const handleExp = (e) => {
    setDesData({
      ...desData,
      exp: e.target.value,
    });
  };

  const handleExpCity = (e) => {
    setDesData({
      ...desData,
      expCity: e.target.value,
    });
  };

  const handleDes = (e) => {
    setDesData({
      ...desData,
      des: e.target.value,
    });
  };

  const handleCollege2 = (e) => {
    setEduData2({
      ...eduData2,
      college: e.target.value,
    });
  };

  const handleDegree2 = (e) => {
    setEduData2({
      ...eduData2,
      degree: e.target.value,
    });
  };

  const handleCity2 = (e) => {
    setEduData2({
      ...eduData2,
      city: e.target.value,
    });
  };

  const handlePeriod2 = (e) => {
    setEduDat2a({
      ...eduData2,
      period: e.target.value,
    });
  };

  const handlePosition2 = (e) => {
    setDesData2({
      ...desData2,
      position: e.target.value,
    });
  };

  const handleCompany2 = (e) => {
    setDesData2({
      ...desData2,
      company: e.target.value,
    });
  };

  const handleExp2 = (e) => {
    setDesData2({
      ...desData2,
      exp: e.target.value,
    });
  };

  const handleExpCity2 = (e) => {
    setDesData2({
      ...desData2,
      expCity: e.target.value,
    });
  };

  const handleDes2 = (e) => {
    setDesData2({
      ...desData2,
      des: e.target.value,
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
          handleCollege={handleCollege}
          handleDegree={handleDegree}
          handleCity={handleCity}
          handlePeriod={handlePeriod}
          desData={desData}
          handlePosition={handlePosition}
          handleCompany={handleCompany}
          handleExp={handleExp}
          handleExpCity={handleExpCity}
          handleDes={handleDes}
          eduData2={eduData2}
          handleCollege2={handleCollege2}
          handleDegree2={handleDegree2}
          handleCity2={handleCity2}
          handlePeriod2={handlePeriod2}
          desData2={desData2}
          handlePosition2={handlePosition2}
          handleCompany2={handleCompany2}
          handleExp2={handleExp2}
          handleExpCity2={handleExpCity2}
          handleDes2={handleDes2}
        />
        <AsideCv
          basicData={basicData}
          eduData={eduData}
          expData={desData}
          eduData2={eduData2}
          expData2={desData2}
        />
      </div>
    </>
  );
}

export default App;
