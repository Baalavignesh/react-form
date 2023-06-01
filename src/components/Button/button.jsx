import React from "react";

function Button(props) {
  return (
    <button
      className="rounded-md bg-green-300 w-fit pr-6 pl-6 pt-2 pb-2 flex self-center"
      onClick={props.onclick}
    >
      <span className="font-xl font-medium">{props.name}</span>
    </button>
  );
}

export default Button;
