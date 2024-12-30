import { useState } from "react";
import Basic from "./basicForm";
import Edu from "./eduForm";
import Expr from "./Experience";

function MainForm({
  basicData,
  handleName,
  handlePhone,
  handleMail,
  handleGithub,
  eduData,
  handleCollege,
  handleDegree,
  handleCity,
  handlePeriod,
  desData,
  handlePosition,
  handleCompany,
  handleExp,
  handleExpCity,
  handleDes,
  eduData2,
  handleCollege2,
  handleDegree2,
  handleCity2,
  handlePeriod2,
  desData2,
  handlePosition2,
  handleCompany2,
  handleExp2,
  handleExpCity2,
  handleDes2,
}) {
  const [selected, setSelected] = useState(`null`);

  return (
    <>
      <main className="flex flex-col gap-20 items-center">
        <h1 className="text-5xl font-bold text-center">
          <a href="https://github.com/notsanta20/cv-application" target="blank">
            CV Application Creator
          </a>
        </h1>
        <div className="flex flex-col items-center gap-10">
          <div className="bg-gray-200 rounded-md p-3 flex flex-col">
            <div
              className="text-lg font-medium"
              onClick={() => setSelected(selected === `bas` ? `null` : `bas`)}
            >
              Basic Details
            </div>
            <div className={selected === `bas` ? `show` : `hide`}>
              <Basic
                data={basicData}
                handleName={handleName}
                handlePhone={handlePhone}
                handleMail={handleMail}
                handleGithub={handleGithub}
              />
            </div>
          </div>
          <div className="bg-gray-200 rounded-md p-3">
            <div
              className="text-lg font-medium"
              onClick={() => setSelected(selected === `edu` ? `null` : `edu`)}
            >
              Education Details
            </div>
            <div className={selected === `edu` ? `show` : `hide`}>
              <div className="flex flex-col gap-3">
                <div className="font-medium text-md text-gray-700">
                  College 1
                </div>
                <div>
                  <Edu
                    data={eduData}
                    handleCollege={handleCollege}
                    handleDegree={handleDegree}
                    handleCity={handleCity}
                    handlePeriod={handlePeriod}
                  />
                </div>
                <div className="font-medium text-md text-gray-700">
                  College 2
                </div>
                <div>
                  <Edu
                    data={eduData2}
                    handleCollege={handleCollege2}
                    handleDegree={handleDegree2}
                    handleCity={handleCity2}
                    handlePeriod={handlePeriod2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-md p-3 flex flex-col">
            <div
              className="text-lg font-medium"
              onClick={() => setSelected(selected === `exp` ? `null` : `exp`)}
            >
              Experience
            </div>
            <div className={selected === `exp` ? `show` : `hide`}>
              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-gray-700">
                  Experience 1
                </div>
                <div>
                  <Expr
                    data={desData}
                    handlePosition={handlePosition}
                    handleCompany={handleCompany}
                    handleExp={handleExp}
                    handleExpCity={handleExpCity}
                    handleDes={handleDes}
                  />
                </div>
                <div className="text-md font-medium text-gray-700">
                  Experience 2
                </div>
                <div>
                  <Expr
                    data={desData2}
                    handlePosition={handlePosition2}
                    handleCompany={handleCompany2}
                    handleExp={handleExp2}
                    handleExpCity={handleExpCity2}
                    handleDes={handleDes2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainForm;
