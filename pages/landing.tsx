import Router from "next/router";
import { Button } from "../components/button";

function landing() {
  function navigateTo(path: string) {
    Router.push(path);
  }

  return (
    <>
      <div className="p-4 md:px-20">
        <h1 className="text-[#18978F] text-5xl md:text-7xl mt-12 md:mt-20 text-center font-bold font-sans">
          CODING EXERCICE
        </h1>
        <div className="flex justify-center mt-12 md:mt-20 mb-10 grid grid-row-3 gap-6 text-center">
          <Button text={"Small coding exercices"} onClick={() => navigateTo("/exercices")}></Button>
          <Button text={"Random dog"} onClick={() => navigateTo("/randomDog")}></Button>
          <Button
            text={"DOGS WITH THEIR BREEDS"}
            onClick={() => navigateTo("/selectBreed")}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default landing;
