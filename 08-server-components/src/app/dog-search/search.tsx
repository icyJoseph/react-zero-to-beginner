"use client";

import style from "./dog-search.module.css";

import { type ChangeEvent, useState } from "react";
import { getDog } from "./utils";

const SelectBreed = ({
  breeds,
  onChange,
}: {
  breeds: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <select className={style.selector} onChange={onChange}>
    <option value=""> -- Select Breed -- </option>
    {breeds.map((breed) => (
      <option key={breed} value={breed}>
        {breed.replace("-", " ")}
      </option>
    ))}
  </select>
);

export const Search = ({ breeds }: { breeds: string[] }) => {
  const [selected, setSelected] = useState("");
  const [dogImage, setDogImage] = useState("");

  return (
    <>
      <div className={style.wrapper}>
        <span className={style.search}>
          <span>https://dog.ceo/api/breed/</span>
          <SelectBreed
            breeds={breeds}
            onChange={(event) => setSelected(event.target.value)}
          />
          <span>/images/random</span>
        </span>

        {/* on click this should call getDog */}
        <button
          className={style.fetch}
          disabled={!selected}
          onClick={() => selected && getDog(selected).then(setDogImage)}
        >
          Fetch!
        </button>
      </div>

      {dogImage && (
        <div>
          <img src={dogImage} className={style.image} />
        </div>
      )}
    </>
  );
};
