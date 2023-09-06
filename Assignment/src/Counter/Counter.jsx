import "./Counter.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import {
  RiArrowDownDoubleLine,
  RiArrowDownSLine,
  RiArrowUpDoubleFill,
} from "react-icons/ri";
import { useState } from "react";

const Counter = () => {
  const [value, setvalue] = useState(0);

  const incrementOne = () => {
    setvalue((pre) => pre + 1);
  };
  const incrementTen = () => {
    setvalue((pre) => pre + 10);
  };

  const decrementOne = () => {
    setvalue((pre) => pre - 1);
  };
  const decrementTen = () => {
    setvalue((pre) => pre - 10);
  };
  const restart = () => {
    setvalue(0);
  };

  const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setvalue(randomNumber);
  };
  return (
    <div className="background2">
      <div className="card2">
        <p>Current Value</p>

        <h1 className="number"> {value}</h1>

        <div className="buttons">
          <button onClick={incrementOne} className="">
            <MdOutlineKeyboardArrowUp size={20} />
          </button>
          <button onClick={incrementTen} className="">
            <RiArrowUpDoubleFill size={20} />
          </button>
          <button onClick={restart} className="">
            <VscDebugRestart size={20} />
          </button>

          <button onClick={randomNum} className=" random">
            #
          </button>

          <button onClick={decrementTen} className="">
            <RiArrowDownDoubleLine size={20} />
          </button>
          <button onClick={decrementOne} className="">
            {" "}
            <RiArrowDownSLine size={20} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
