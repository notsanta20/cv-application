import { useState } from "react";
import Input from "./input";

function Basic({ data }) {
  const [basicData, setBasicData] = useState({
    name: ``,
    phone: ``,
    mail: ``,
    github: ``,
  });

  function handleName(e) {
    setBasicData({
      ...basicData,
      name: e.target.value,
    });
    console.log(data.data);
    data.data.basicData.name = e.target.value;
  }

  function handlePhone(e) {
    setBasicData({
      ...basicData,
      phone: e.target.value,
    });
    data.phone = e.target.value;
  }

  function handleMail(e) {
    setBasicData({
      ...basicData,
      mail: e.target.value,
    });
    data.mail = e.target.value;
  }

  function handleGithub(e) {
    setBasicData({
      ...basicData,
      github: e.target.value,
    });
    data.github = e.target.value;
  }

  return (
    <>
      <div className="basic-container  bg-gray-200 rounded-md p-3">
        <div className="text-lg font-medium">Basic Details</div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Input
            field={`Name`}
            type={`text`}
            value={basicData.name}
            func={handleName}
          />
          <Input
            field={`Phone`}
            type={`tel`}
            value={basicData.phone}
            func={handlePhone}
          />
          <Input
            field={`E-mail`}
            type={`email`}
            value={basicData.mail}
            func={handleMail}
          />
          <Input
            field={`Github`}
            type={`text`}
            value={basicData.github}
            func={handleGithub}
          />
        </div>
      </div>
    </>
  );
}

export default Basic;
