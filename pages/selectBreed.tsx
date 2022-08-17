/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../components/button";

export interface SelectBreedProps {
  data: relBreedDog[];
}

export interface relBreedDog {
  img: string;
  breed: string;
}

function SelectBreed(props: any) {
  const [load, setLoad] = useState<boolean>(false);
  const [dogsList, setDogsList] = useState<relBreedDog[]>();
  const breedsArray = Object.keys(props.data.message);

  useEffect(() => {
    let dogs: relBreedDog[] = [];
    if (breedsArray) {
      const breeds = obtainBreeds();
      breeds.map(async (breed) => {
        const dogImg = await requestBreed(breed);
        dogs.push({ img: dogImg?.message, breed: breed });

        if (dogs?.length === 10 && !load) {
          setDogsList(dogs);
          setLoad(true);
        }
      });
    }

    async function requestBreed(breed: string) {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }

    function obtainBreeds() {
      let breeds: string[] = [];
      let breedPosition: number = 0;
      while (breeds.length != 10) {
        breedPosition = random();
        breeds.push(breedsArray[breedPosition]);
        breeds = Array.from(new Set(breeds)) as string[];
      }
      return breeds;
    }

    function random() {
      return Math.floor(Math.random() * breedsArray.length);
    }
  }, [breedsArray, load]);

  function navigateTo(path: string) {
    Router.push(path);
  }

  return (
    <>
      {load && (
        <div className="p-4 md:px-20">
          <h2 className="text-[#18978F] text-3xl md:text-4xl mt-5 md:mt-5 text-center font-bold">
            DOGS WITH THEIR BREEDS
          </h2>
          {dogsList?.map((dog) => (
            <>
              <div key={dog?.breed}>
                <div className="flex justify-center my-10 rounded">
                  <img src={dog?.img} alt="randomDog" className="max-w-xs rounded-lg" />
                </div>
                <p className="text-center uppercase font-bold">{dog?.breed}</p>
              </div>
            </>
          ))}

          <div className="flex justify-center mt-12 md:mt-12 mb-10 text-center">
            <Button text={"BACK"} onClick={() => navigateTo("/landing")}></Button>
          </div>
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
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

export default SelectBreed;
