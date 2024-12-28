import { useState } from "react";
import Basic from "./basicForm";
import Edu from "./eduForm";

function MainForm() {
  return (
    <>
      <main>
        <h1 className="text-5xl font-normal text-center">
          CV Application Creator
        </h1>
        <div className="flex flex-col gap-4">
          <Basic />
          <Edu />
        </div>
      </main>
    </>
  );
}

export default MainForm;
