import { IMAGE_URL } from "../config";
import { useCats } from "../hooks/useCats";
import type { Cat } from "../hooks/useCats";

export const CatPage = () => {
  const { cats, isLoading, isError } = useCats();

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading cats...</div>;
  }

  return (
    <div>
      {cats?.slice(0, 3).map((cat) => (
        <Card key={cat._id} {...cat} />
      ))}
    </div>
  );
};

const Card = ({ createdAt, tags }: Cat) => (
  <div className="cat">
    <h6>{createdAt}</h6>

    {[...new Set(tags)]
      .filter((tag) => tag.trim() !== "")
      .map((tag) => {
        const image = `${IMAGE_URL}/${tag}`;

        return (
          <figure key={tag}>
            <figcaption>{tag}</figcaption>
            <img src={image} alt={tag} />
          </figure>
        );
      })}
  </div>
);
