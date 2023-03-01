const dogCEOEndpoint = "https://dog.ceo/api";

export async function getDog(breed: string): Promise<string> {
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

export async function getAllBreeds(): Promise<string[]> {
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
