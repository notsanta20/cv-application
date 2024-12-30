import { useState } from "react";
import Basic from "./basicForm";
import Edu from "./eduForm";

function MainForm({
  basicData,
  handleName,
  handlePhone,
  handleMail,
  handleGithub,
  eduData,
}) {
  function getData() {
    console.log(basicData);
  }

  return (
    <>
      <main className="flex flex-col gap-20">
        <h1 className="text-5xl font-semibold text-center">
          CV Application Creator
        </h1>
        <div className="flex flex-col items-center gap-10">
          <Basic
            data={basicData}
            handleName={handleName}
            handlePhone={handlePhone}
            handleMail={handleMail}
            handleGithub={handleGithub}
          />
          <Edu data={eduData} />
          <button
            className="rounded p-2 bg-blue-600 text-white"
            onClick={getData}
          >
            Get CV
          </button>
        </div>
      </main>
    </>
  );
}

export default MainForm;
