import styled from "styled-components";

import profile from "../data/github.json";

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const GitHubCard = styled.article`
  background-color: #eee;
  color: #242424;
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  border-radius: 8px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  & img {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    margin-top: -4rem;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const GitHub = () => (
  <Wrapper>
    <GitHubCard>
      <header>
        <img
          src={profile.data.viewer.avatarUrl}
          alt={profile.data.viewer.name}
        />

        <p>{profile.data.viewer.login}</p>
      </header>

      <p>{profile.data.viewer.starredRepositories.totalCount} stars</p>
    </GitHubCard>
  </Wrapper>
);
