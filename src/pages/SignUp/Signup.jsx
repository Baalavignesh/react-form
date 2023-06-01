import React, { useRef, useState } from "react";
import InputField from "../../components/InputField/input-field";
import Button from "../../components/Button/button";

function Signup() {
  let [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    repassword: "",
  });

  let dialogBox = useRef(null);

  let handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  let handleSubmit = () => {
    // Button submit here
    dialogBox.current.showModal();
    console.log(userData);

    Object.keys(userData).map((val, index) => {
      console.log(val);
    });

    console.log("submitted");
  };

  return (
    <div className="flex w-full justify-center item-center h-screen ">
      <div className="p-12 m-20 flex flex-col w-3/5 bg-slate-200 rounded-lg justify-evenly">
        <h1 className="text-4xl bold font-normal text-center m-10">SIGNUP</h1>

        <InputField
          name="firstname"
          span="First Name"
          placeholder="Enter your first name"
          onChange={handleInput}
        />
        <InputField
          name="lastname"
          span="Last Name"
          placeholder="Enter your last name"
          onChange={handleInput}
        />
        <InputField
          name="email"
          span="Email"
          placeholder="name@example.com"
          onChange={handleInput}
        />
        <InputField
          name="number"
          span="Mobile Number"
          placeholder="+91 1234567890"
          onChange={handleInput}
        />
        <InputField
          name="password"
          span="Password"
          placeholder="Enter your password"
          onChange={handleInput}
        />

        <InputField
          name="repassword"
          span="Re-Enter Password"
          placeholder="Re-Enter your password"
          onChange={handleInput}
        />

        <div className="mt-6 self-center">
          <Button name="SignUp" onclick={handleSubmit}></Button>
        </div>
      </div>
      <dialog id="d" ref={dialogBox} >
        <form
          method="dialog"
          className="flex flex-col justify-center items-center text-center w-full h-4/6 rounded-xl p-24"
        >
          <p className="text-2xl">User Information</p>
          <div className="self-center">
            {Object.entries(userData).map((val, index) => {
              console.log(val);
              let new_key = val.slice(0, -1);
              return (
                <div>
                  <h1>{`${new_key} : ${userData[new_key]}`}</h1>
                </div>
              );
            })}
            <h1></h1>
          </div>
          <Button name="close" onclick={() => dialogBox.current.close()} />
        </form>
      </dialog>
    </div>
  );
}

export default Signup;
