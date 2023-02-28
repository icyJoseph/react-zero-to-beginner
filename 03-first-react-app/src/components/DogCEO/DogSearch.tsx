import dogsearch from "./dogsearch.module.css";

function getDog() {
  let selectedDog = document.querySelector(
    ".dog-selector option:selected"
  )?.nodeValue;

  console.log(selectedDog);

  if (!selectedDog) return;

  let dogURL = selectedDog.replace(/-/g, "/");

  fetch("https://dog.ceo/api/breed/" + dogURL + "/images/random")
    .then((res) => res.json())
    .then(function (result) {
      let target = document.querySelector(".demo-image");

      if (!target) return;

      target.innerHTML = "<img src='" + result.message + "'>";
    });
}

async function getAllBreeds(): Promise<string[]> {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");

  if (!response.ok) throw new Error("Failed to get breed list");

  try {
    const data = await response.json();

    const breeds = Object.entries(data.message).flatMap(([breed, value]) => {
      if (!Array.isArray(value)) return breed;

      if (value.length === 0) return breed;

      return value.map((sub) => `${sub}-${breed}`);
    });

    return breeds;
  } catch (reason) {
    throw new Error("Failed to resolve breed list");
  }
}

export const DogSearch = () => (
  <div>
    <h2>Breeds list</h2>

    <div>
      <div className={dogsearch.wrapper}>
        <span className={dogsearch.search}>
          <span>https://dog.ceo/api/breed/</span>
          <select className={dogsearch.selector}>
            {/* This date should come from getAllBreeds */}
            <option value="affenpinscher">affenpinscher</option>
            <option value="african">african</option>
            <option value="airedale">airedale</option>
            <option value="akita">akita</option>
            <option value="appenzeller">appenzeller</option>
            <option value="australian-shepherd">shepherd australian</option>
            <option value="basenji">basenji</option>
            <option value="beagle">beagle</option>
            <option value="bluetick">bluetick</option>
            <option value="borzoi">borzoi</option>
            <option value="bouvier">bouvier</option>
            <option value="boxer">boxer</option>
            <option value="bullterrier-staffordshire">
              staffordshire bullterrier
            </option>
          </select>
          <span>/images/random</span>
        </span>

        {/* on click this should call getDog */}
        <button>Fetch!</button>
      </div>

      <div>
        <img
          src="https://images.dog.ceo/breeds/affenpinscher/n02110627_11782.jpg"
          className={dogsearch.image}
        />
      </div>
    </div>
  </div>
);
