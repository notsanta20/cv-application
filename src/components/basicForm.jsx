import { useState } from "react";
import Input from "./input";

function Basic({ data, handleName, handlePhone, handleMail, handleGithub }) {
  return (
    <>
      <div className="basic-container  bg-gray-200 rounded-md p-3">
        <div className="text-lg font-medium">Basic Details</div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Input
            field={`Name`}
            type={`text`}
            value={data.name}
            func={handleName}
          />
          <Input
            field={`Phone`}
            type={`tel`}
            value={data.phone}
            func={handlePhone}
          />
          <Input
            field={`E-mail`}
            type={`email`}
            value={data.mail}
            func={handleMail}
          />
          <Input
            field={`Github`}
            type={`text`}
            value={data.github}
            func={handleGithub}
          />
        </div>
      </div>
    </>
  );
}

export default Basic;
