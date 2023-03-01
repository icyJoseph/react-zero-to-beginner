import { useGHQuery } from "../hooks/useGitHubQuery";

const query = `query User($login: String!) { 
    user(login: $login) { 
      bio
      company
      name
      repositories(first:5){
        nodes {
          name
        }
      }
    }
  }`;

type User = { name: string; repositories: { nodes: Array<{ name: string }> } };
type Variables = { login: string };

const variables = { login: "octocat" };

export const OctoCat = ({ token }: { token?: string }) => {
  const data = useGHQuery<User, Variables>({
    query,
    variables,
    token,
  });

  if (!data) return <div>Nada</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <ul>
        {data.repositories.nodes.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
