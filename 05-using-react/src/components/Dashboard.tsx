import { useState } from "react";

type User = {
  name: string;
};

export function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <LoginForm onLogin={() => setUser({ name: "joseph" })} />
      )}
    </div>
  );
}

const UserProfile = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>Profile</h2>

      <Nav />

      <ProfileCard user={user} />
    </div>
  );
};

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  return <button onClick={onLogin}>Login</button>;
};

/**
 * Dashboard blocks
 */

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
);

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <article>
      <h3>Welcome</h3>

      <UserName user={user} />
    </article>
  );
};

const UserName = ({ user }: { user: User }) => {
  return <h4>{user.name}</h4>;
};
