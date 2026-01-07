import React from "react";
import MyContext from "./MyContext.js";
import { useContext, useRef, useState } from "react";

const FormInput = () => {
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let number = useRef(); 
  let image = useRef();

  let { addData } = useContext(MyContext);
  const [errors, setErrors] = useState({});

  function handleAdd(e) {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      number: number.current.value,
      image: image.current.value,
    };

    const newErrors = {};
    if (!obj.name || obj.name.trim() === "")
      newErrors.name = "Name is required";
    if (!obj.email || !/^\S+@\S+\.\S+$/.test(obj.email))
      newErrors.email = "Enter a valid email";
    if (!obj.password || obj.password.length < 6)
      newErrors.password = "Password must be atleast 6 characters";
    if (!obj.number || !/^\d{10}$/.test(obj.number))
      newErrors.number = "Number must be 10 digits";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    addData(obj);

    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
    number.current.value = "";
    image.current.value = "";
  }

  return (
    <div>
      <form onSubmit={(e) => handleAdd(e)}>
          <div className="flex flex-col flex-1 min-w-[140px]">
            <input className={`bodrer p-2 rounded ${errors.name ? 'border-red-800': ''}`} ref={name}  type="text" placeholder="name" />
            {errors.name && <span className="text-red-600 text-sm mt-1" >{errors.name}</span>}
          </div>

          <div>
            <input type="email"  placeholder="email"
            ref={email}
            />
          </div> 

          <div>
            <input type="password" placeholder="password" 
            ref={password}
             />
          </div>

          <div>
            <input type="tel" placeholder="number" ref={number} />
          </div>

          <div>
            <input type="url" ref={image} placeholder="image url"/>
          </div>

          <div>
            <button type="submit">
              Add
            </button>
          </div>

      </form>
    </div>
  );
};

export default FormInput;
