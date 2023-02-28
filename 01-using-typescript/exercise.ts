/*
 * - Type the user object
 * - Fix the user card function
 */

const data = {
  data: {
    user: {
      login: "icyJoseph",
      name: "Joseph",
      isHireable: false,
      starredRepositories: {
        totalCount: 373,
      },
      status: {
        message: "Coding",
      },
      company: "@EvolveTechnology",
      repositories: {
        nodes: [
          {
            name: "99-problems",
          },
          {
            name: "react-formatted-number-input",
          },
          {
            name: "word-clone",
          },
        ],
      },
    },
  },
};

function userCard(user: unknown) {
  return `
  Hi, 

  - My name is ${user.name} 
  - You can find me on GitHub as @${user.login} 
  - I am ${user.isHireable ? "open to work" : "happily employed"}
  - On GitHub I am part of the ${user.company} organization
  
  Starred Repos: ${user.starredRepositories.totalCount}
  Latest Repos: ${user.repositories.nodes.map((repo) => repo.name).join(", ")}

`;
}

console.log("First:");

console.log(userCard(data.data.user));

/*
 * Create a function that enumerates
 * an input list, by index as a tuple (index, value)
 *
 * [1,2,3] -> [[0,1], [1,2], [2,3]]
 */

const enumerate = (xs) => xs;

const list = ["a", "b", "c", "d"];

console.log("Second:");

for (const entry of enumerate(list)) {
  console.log(entry);
}

/*
 * Filter the events list so that we can
 * call sendUserEvents
 */

type UserEvent = { type: "click" | "scroll" | "keypress" };

const events: Array<UserEvent | null | undefined> = [
  null,
  undefined,
  { type: "click" },
  { type: "scroll" },
  null,
  { type: "keypress" },
];

console.log("Third:");

function sendUserEvents(events: UserEvent[]) {
  events.forEach(({ type }) => console.log("Event:", type));
}

sendUserEvents(events)
