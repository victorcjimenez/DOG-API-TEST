/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../components/button";

export interface RandomDogProps {
  data: { message: string; status: string };
}

function RandomDog(props: RandomDogProps) {
  const [img, setImg] = useState(props.data.message);

  function navigateTo(path: string) {
    Router.push(path);
  }

  const randomImg = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    setImg(data?.message);
  };

  return (
    <>
      <div className="p-4 md:px-20">
        <h2 className="text-[#18978F] text-3xl md:text-4xl mt-5 md:mt-5 text-center font-bold">
          Random Dog Image
        </h2>
        <div className="flex justify-center my-10 rounded">
          <img src={img} alt="randomDoG" className="max-w-xs md:max-w-md rounded-lg" />
        </div>

        <div className="flex justify-center mt-12 md:mt-12 mb-10 text-center">
          <Button text={"Random Image"} onClick={() => randomImg()}></Button>
        </div>

        <div className="flex justify-center mt-12 md:mt-12 mb-10 text-center">
          <Button text={"BACK"} onClick={() => navigateTo("/landing")}></Button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default RandomDog;
