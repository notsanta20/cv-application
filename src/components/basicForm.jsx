import { useState } from "react";

function Basic() {
  return (
    <>
      <div className="basic-container flex flex-wrap gap-3">
        <label>
          Name
          <input type="text" placeholder="Full Name" />
        </label>
        <label>
          Phone
          <input type="tel" placeholder="Phone" />
        </label>
        <label>
          Mail
          <input type="email" placeholder="E-mail" />
        </label>
        <label>
          GitHub Profile
          <input type="url" placeholder="Github Profile" />
        </label>
      </div>
    </>
  );
}

export default Basic;
