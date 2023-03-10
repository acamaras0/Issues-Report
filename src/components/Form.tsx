import { useState } from "react";
import { CgCheckO } from "react-icons/cg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsFillKeyboardFill } from "react-icons/bs";
import { GiMouse } from "react-icons/gi";
import { FormProps } from "../interface/interfaces";

const Form = ({
  setLogin,
  setIssue,
  setLocation,
  setRadio,
  handleAdd,
}: FormProps) => {
  const [message, setMessage] = useState<string>("");
  const handleChange =
    (setter: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const inputs: Array<{
    label: string;
    type: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }> = [
    {
      label: "Intra login",
      type: "text",
      placeholder: "",
      onChange: handleChange(setLogin),
    },
    {
      label: "Issue description",
      type: "text",
      placeholder: "Provide a short description of your issue",
      onChange: handleChange(setIssue),
    },
    {
      label: "Mac location (cluster/row/place)",
      type: "text",
      placeholder: "c1r1p1",
      onChange: handleChange(setLocation),
    },
  ];

  return (
    <div className="flex justify-center p-6">
      <form
        className="block max-w-md bg-gray-50 p-6 shadow-lg font-mono"
        onSubmit={(e) => {
          handleAdd(e);
          setMessage("Thank you!");
        }}
      >
        <p className="uppercase leading-[2] text-zinc-600">
          {" "}
          What do you have problems with?{" "}
        </p>
        <div className="flex justify-start">
          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="w-4 h-4"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="MAC"
              onChange={(e) => setRadio(e.target.value)}
              required
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio1"
            >
              <HiOutlineDesktopComputer className="text-blue-500 w-6 h-6 ml-2" />
            </label>
          </div>
          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="w-4 h-4"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Keyboard"
              onChange={(e) => setRadio(e.target.value)}
              required
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio2"
            >
              <BsFillKeyboardFill className="text-yellow-500 w-6 h-6 ml-2" />
            </label>
          </div>
          <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="w-4 h-4"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="Mouse"
              onChange={(e) => setRadio(e.target.value)}
              required
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio3"
            >
              <GiMouse className="text-red-400 h-6 w-6 ml-2" />
            </label>
          </div>
        </div>
        <div className="mb-6">
          {inputs?.map((item, index) => {
            return (
              <div className="" key={index}>
                <label
                  htmlFor={item.label}
                  className="uppercase leading-[2] text-zinc-600"
                >
                  {item.label}
                </label>
                <input
                  className="text-zinc-600 w-full mb-4 border-[0.100rem] border-solid border-zinc-100 bg-white outline-none py-[0.32rem] px-3 leading-[1.6] focus:placeholder:opacity-0 focus:border-b-yellow-300"
                  id={item.label}
                  name={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                  required
                />
              </div>
            );
          })}
        </div>
        <div className="flex">
          <button
            className="bg-yellow-300 px-6 py-2.5 text-xs font-bold uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
            type="submit"
          >
            Submit
          </button>
          <span
            className={
              message.length > 0
                ? "text-green-500 text-lg h-2 w-2 ml-3 mt-2"
                : "h-2 w-2 text-gray-50"
            }
          >
            <CgCheckO />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
