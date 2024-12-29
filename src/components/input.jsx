function Input({ field, type, value, func }) {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={field} className="px-2 py-1">
          {field}
        </label>
        <input
          type={type}
          id={field}
          value={value}
          placeholder={field}
          className="bg-gray-100 rounded-md p-2"
          onChange={func}
        />
      </div>
    </>
  );
}

export default Input;
