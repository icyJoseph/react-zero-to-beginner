/*
function getDog() {
    var selectedDog = $(".dog-selector option:selected").val();
    dogURL = selectedDog.replace(/-/g, '/');
    $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function(result) {
        $(".demo-image").html("<img src='" + result.message + "'>");
    });
}
function loadDogs() {
    $.getJSON("https://dog.ceo/api/breeds/list/all", function(result) {
        var breeds = result.message;
        firstDog = Object.keys(breeds)[0];
        $.each(breeds, function(dog, breed) {
            if (breeds[dog].length >= 1) {
                for (i = 0; i < breeds[dog].length; i++) {
                    $(".dog-selector").append('<option value="' + dog + '-' + breeds[dog][i] + '">' + breeds[dog][i] + ' ' + dog + '</option>');
                }
            } else if (breeds[dog].length < 1) {
                $(".dog-selector").append('<option value="' + dog + '">' + dog + '</option>');
            }
        });
        $.getJSON("https://dog.ceo/api/breed/" + firstDog + "/images/random", function(result) {
            $(".demo-image").html("<img src='" + result.message + "'>");
        });
    });
}
$(".dog-selector").change(function() {
    $(".dog-selector option:selected").each(function() {
        getDog();
    });
});
$(".get-dog").click(function() {
    getDog();
});
$(document).ready(function() {
    loadDogs();
});

*/

import style from "./dog-search.module.css";

const dogCEOEndpoint = "https://dog.ceo/api";

async function getDog(breed: string): Promise<string> {
  const breedUrl = breed.replace(/-/g, "/");

  const response = await fetch(
    `${dogCEOEndpoint}/breed/${breedUrl}/images/random`
  );

  if (!response.ok) throw new Error("Response was not ok");

  // ts-reset https://github.com/total-typescript/ts-reset
  const data: unknown = await response.json();

  if (!data || typeof data !== "object")
    throw new Error("Expected object response");

  if ("message" in data) {
    const message = data.message;

    if (typeof message !== "string")
      throw new Error("Message was not a string");

    return message;
  }

  throw new Error("Message missing in response");
}

async function getAllBreeds(): Promise<string[]> {
  const response = await fetch(`${dogCEOEndpoint}/breeds/list/all`);

  if (!response.ok) throw new Error("Failed to get breed list");

  try {
    const data = await response.json();

    const breeds = Object.entries(data.message).flatMap(([breed, value]) => {
      if (!Array.isArray(value)) return breed;

      if (value.length === 0) return breed;

      return value.map((sub) => `${breed}-${sub}`);
    });

    return breeds;
  } catch (reason) {
    throw new Error("Failed to resolve breed list");
  }
}

export const DogSearch = () => {
  return (
    <div>
      <h2>Breeds list</h2>

      <div>
        <div className={style.wrapper}>
          <span className={style.search}>
            <span>https://dog.ceo/api/breed/</span>
            <select className={style.selector}>
              {/* This data should come from getAllBreeds */}
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
            className={style.image}
          />
        </div>
      </div>
    </div>
  );
};
