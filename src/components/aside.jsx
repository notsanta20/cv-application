import { useState } from "react";

function AsideCv({ basicData, eduData }) {
  return (
    <>
      <aside className="cv flex flex-col gap-7 p-5">
        <div className="bas-container text-center">
          <div className="name text-5xl font-bold pb-3">{basicData.name}</div>
          <div className="bas text-xl">
            {basicData.phone} | <a href={basicData.mail}>{basicData.mail}</a> |{" "}
            <a href={basicData.github}>{basicData.github}</a>
          </div>
        </div>
        <div className="edu-container">
          <div className="text-2xl font-bold border-b">Education</div>
          <div className="flex text-lg">
            <div className="flex-grow">
              <div className="font-bold">{eduData.college}</div>
              <div className="italic">{eduData.degree}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">{eduData.city}</div>
              <div className="italic ">{eduData.period}</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideCv;
