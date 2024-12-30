import { useState } from "react";
import Input from "./input";

function Basic({ data, handleName, handlePhone, handleMail, handleGithub }) {
  return (
    <>
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
    </>
  );
}

export default Basic;
