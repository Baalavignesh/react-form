import React from "react";

function InputField(props) {
  return (
    <div className="p-2">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {props.span}
      </span>
      <input
        type="email"
        name={props.name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 w-full placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

export default InputField;
