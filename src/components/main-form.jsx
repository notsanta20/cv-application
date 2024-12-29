import { useState } from "react";
import Basic from "./basicForm";
import Edu from "./eduForm";

function MainForm(data) {
  function getData() {
    console.log(data.basic);
    console.log(data.edu);
  }

  return (
    <>
      <main className="flex flex-col gap-20">
        <h1 className="text-5xl font-semibold text-center">
          CV Application Creator
        </h1>
        <div className="flex flex-col items-center gap-10">
          <Basic data={data} />
          <Edu data={data.eduData} />
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
