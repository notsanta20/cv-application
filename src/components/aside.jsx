import { useState } from "react";

function AsideCv({ data }) {
  return (
    <>
      <aside className="cv flex flex-col gap-7 p-5">
        <div className="bas-container text-center">
          <div className="name text-5xl font-bold pb-3">
            {data.basicData.name}
          </div>
          <div className="bas text-xl">
            {data.basicData.phone} |{" "}
            <a href={data.basicData.mail}>{data.basicData.mail}</a> |{" "}
            <a href={data.basicData.github}>{data.basicData.github}</a>
          </div>
        </div>
        <div className="edu-container">
          <div className="text-2xl font-bold border-b">Education</div>
          <div className="flex text-lg">
            <div className="flex-grow">
              <div className="font-bold">{data.eduData.college}</div>
              <div className="italic">{data.eduData.degree}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">{data.eduData.city}</div>
              <div className="italic ">{data.eduData.period}</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideCv;
