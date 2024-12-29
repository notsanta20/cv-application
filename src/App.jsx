import MainForm from "./components/main-form.jsx";
import AsideCv from "./components/aside.jsx";

const data = {
  basicData: {
    name: `Jake Gutierrez`,
    phone: `xxx-xxx-xxxx`,
    mail: `g@odinprojects.edu`,
    github: `github.com/jakeyang`,
  },
  eduData: {
    college: `Southwestern University`,
    degree: `Bachelor of Arts in Computer Science, Minor in Business`,
    city: `Georgetown, TX`,
    period: `Aug. 2018 - May 2021`,
  },
};

function App() {
  return (
    <>
      <div className="main-container w-full h-full grid gap-5 p-5">
        <MainForm data={data} />
        <AsideCv data={data} />
      </div>
    </>
  );
}

export default App;
