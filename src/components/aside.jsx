import { useState } from "react";

function AsideCv({ basicData, eduData, eduData2, expData, expData2 }) {
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
        <div className="edu-container flex flex-col gap-2">
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
          <div className="flex text-lg">
            <div className="flex-grow">
              <div className="font-bold">{eduData2.college}</div>
              <div className="italic">{eduData2.degree}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">{eduData2.city}</div>
              <div className="italic ">{eduData2.period}</div>
            </div>
          </div>
        </div>
        <div className="exp-container flex flex-col gap-2">
          <div className="text-2xl font-bold border-b">Experience</div>
          <div className="flex text-lg">
            <div className="flex-grow">
              <div className="font-bold">{expData.position}</div>
              <div className="italic">{expData.company}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">{expData.exp}</div>
              <div className="italic ">{expData.expCity}</div>
            </div>
          </div>
          <div className="exp-des text-lg whitespace-pre text-wrap ">
            {expData.des}
          </div>
          <div className="flex text-lg">
            <div className="flex-grow">
              <div className="font-bold">{expData2.position}</div>
              <div className="italic">{expData2.company}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">{expData2.exp}</div>
              <div className="italic ">{expData2.expCity}</div>
            </div>
          </div>
          <div className="exp-des text-lg whitespace-pre text-wrap ">
            {expData2.des}
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideCv;
