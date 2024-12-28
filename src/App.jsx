import MainForm from "./components/main-form.jsx";
import AsideCv from "./components/aside.jsx";

function App() {
  return (
    <>
      <div className="main-container w-full h-full grid p-5">
        <MainForm />
        <AsideCv />
      </div>
    </>
  );
}

export default App;
