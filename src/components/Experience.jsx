import Input from "./input";

function Expr({
  data,
  handlePosition,
  handleCompany,
  handleExp,
  handleExpCity,
  handleDes,
}) {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        <Input
          field={`Position`}
          type={`text`}
          value={data.position}
          func={handlePosition}
        />
        <Input
          field={`Company`}
          type={`text`}
          value={data.company}
          func={handleCompany}
        />
        <Input
          field={`Period`}
          type={`text`}
          value={data.exp}
          func={handleExp}
        />
        <Input
          field={`city`}
          type={`text`}
          value={data.expCity}
          func={handleExpCity}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Description" className="px-2 py-1">
          Description
        </label>
        <textarea
          name="Description"
          id="Description"
          value={data.des}
          placeholder="Description"
          className="bg-gray-100 rounded-md p-2"
          onChange={handleDes}
          rows="5"
        ></textarea>
      </div>
    </>
  );
}

export default Expr;
