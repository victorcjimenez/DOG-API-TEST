import { Console } from "console";
import Router from "next/router";
import { useState } from "react";
import { Button } from "../components/button";

function Exercises() {
  const [newDelay, setNewDelay] = useState<string>("0");
  const [uniq, setUniq] = useState<string[]>();

  function navigateTo(path: string) {
    Router.push(path);
  }

  // EXERCISE 1 - SOLVED:
  function delay(milliseconds: number) {
    return function (v: any) {
      return new Promise((resolve) => setTimeout(() => resolve(v), milliseconds));
    };
  }

  function exercise1(milliseconds: number) {
    Promise.resolve(42)
      .then(delay(milliseconds))
      .then(() => alert(" Hi! The promise is resolved after " + milliseconds + " milliseconds"));
  }

  // EXERCISE 2 - SOLVED:
  let left = 100;
  const inc = 100;
  function animateRight(el: any) {
    left += inc;
    setInterval(() => {
      el.style.left = left + "px";
    }, 1000);
  }

  // EXERCISE 3 - SOLVED:
  function removeDuplicates(xs: string[]) {
    setUniq(Array.from(new Set(xs)));

    // Console.log to show that the new array doesn't have any duplicate,
    // Please click two times to see it, there is not a way to check a useState value after set the value in a short period of time.
    console.log(uniq);
  }

  return (
    <>
      <div className="p-4 md:px-20">
        <h2 className="text-[#18978F] text-3xl md:text-4xl mt-5 md:mt-5 text-center font-bold">
          SMALL CODING EXERCISES
        </h2>
        <h5 className="text-[#18978F] text-lg md:text-lg mt-5 md:mt-5 ">EXERCISE 1</h5>
        <p>ms: number of milliseconds. Returns a Promise that is resolved after ms milliseconds</p>

        <form className="m-3">
          <label className="block mb-2 text-sm font-medium">
            Introduce number of milliseconds to show the alert
          </label>
          <input
            type="number"
            name="delay"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="220ms"
            value={newDelay}
            onChange={(e) => {
              setNewDelay(e?.target?.value);
            }}
          />

          <Button className="mt-3" text={"Submit"} onClick={() => exercise1(+newDelay)}></Button>
        </form>

        <h5 className="text-[#18978F] text-lg md:text-lg mt-5 md:mt-5 ">EXERCISE 2</h5>
        <p>
          el: element node object. Moves the element to the right by 100px over a duration of 1
          second function animateRight(el) {}
        </p>

        <div className="m-3 mb-20">
          <button
            id="element"
            className="absolute w-20 bg-[#78c5ab] rounded font-bold cursor-pointer"
            onClick={() => animateRight(document.getElementById("element"))}
          >
            <span className="text-white">CLICK HERE</span>
          </button>
        </div>

        <h5 className="mt-20 text-[#18978F] text-lg md:text-lg mt-5 md:mt-5 ">EXERCISE 3</h5>
        <p>xs: array. Returns: a new array, with unique items function removeDuplicates(xs) {}</p>

        <div className="m-3 mb-20">
          <p>
            Sending this array
            [&apos;TOM&apos;,&apos;SARA&apos;,&apos;TOM&apos;,&apos;LUCIA&apos;,&apos;VICTOR&apos;,&apos;DOC&apos;]
            to the function
          </p>
          <Button
            text="Click here to remove the duplicates"
            className="mt-5 mb-5 bg-[#A2D5AC] cursor-pointer"
            onClick={() => removeDuplicates(["TOM", "SARA", "TOM", "LUCIA", "VICTOR", "DOC"])}
          ></Button>

          <span className="mt-5"> {uniq}</span>
        </div>

        <div className="flex justify-center mt-12 md:mt-20 mb-10 text-center">
          <Button text={"BACK"} onClick={() => navigateTo("/landing")}></Button>
        </div>
      </div>
    </>
  );
}

export default Exercises;
