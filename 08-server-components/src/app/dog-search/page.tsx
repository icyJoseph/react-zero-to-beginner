import style from "./dog-search.module.css";

import { Inter } from "next/font/google";

import { Search } from "./search";
import { getAllBreeds } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export const DogSearch = async () => {
  const breeds = await getAllBreeds();
  return (
    <main className={`${style.main} ${inter.className}`}>
      <h1>Breeds list</h1>

      <Search breeds={breeds} />
    </main>
  );
};

export default DogSearch;
