# Using React

- Cheatsheet: https://github.com/typescript-cheatsheets/react

## Development and Production

In development mode React includes a lot more debugging information
than it does in production mode.

In development mode one can also use StrictMode which makes React run
pure work, twice. Since pure work is by definition free of side-effects,
this helps us catch bugs that'd otherwise be really hard to figure out.

However, it is no silver bullet.

### React DevTools

There's a browser extension, which you can use to debug your application
both in development and production.

- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

## Lifting state

If two components need to share state, the go-to technique is to
lift the state up to the closest common parent.

Why wouldn't we just put everything together? We would lose component isolation.

When the application complexity grows too much, or the common parent is the root
of the application, we should start to use a global state management solution.

> Data flows from parents to children

## Co-locating state

If state can be moved down to children, do it. That is place state where it belongs.

Usually when we develop a feature, we hold state at one place, and make sure everything works fine.
However, when we start to refactor our components, too often we fallback to use props, rather
than moving state into the components that need it.

## Composition

Typically, to avoid prop-drilling, we can either use:

- React's Context Provider
- Global State Management Solution (which might use Context anyway)
- Composition

## Custom Hooks

- useDebouncedValue
- useInViewport
- useTime
- useToggle
- useMouseXY

```js
const createFunction = () => {
  const fn = () => {};
  return fn;
};

console.log(createFunction() === createFunction()); // ?
console.log({} === {}); //
console.log([] === []); //
```

## A primer on Patterns

> https://reactpatterns.com/, a whole bunch of JavaScript + React patterns

### Reducer

Using the Command Query Separation principle, we can invoke `useReducer`, which
is an React hook, that uses a reducer function to calculate state updates,
based off the current state, and the contents of a command.

```tsx
import { useReducer } from "react";

const counterReducer = (prev, action) => {
  switch (action.type) {
    case "ADD":
      return prev + action.payload;
    case "MULT":
      return prev * action.payload;
    case "SET":
      return action.payload;
    default:
      return prev;
  }
};

const Counter = ({ initial = 0 }) => {
  const [count, dispatch] = useReducer(counterReducer, initial);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>+1</button>

      <button onClick={() => dispatch({ type: "MULT", payload: 2 })}>x2</button>

      <button onClick={() => dispatch({ type: "SET", payload: initial })}>
        RESET
      </button>
    </div>
  );
};
```

### Presentational and Smart components

- Smart components: A component whose concern is to read data.
- Presentational: Closer to the DOM, these are controlled by props.

```tsx
import Avatar from "design-system/avatar";
import useUser from "swr/use-user";

export default function Profile({ id }) {
  const { user, loading } = useUser(id);

  if (loading) return <Spinner />;

  return (
    <>
      <Avatar src={user.pic} />
      <h1>{user.name}</h1>
    </>
  );
}
```

### Context Provider

- Using React's Context one can inject data to a React sub-tree

### Forms: Controlled vs Uncontrolled

A component should not go back and forth between uncontrolled
and controlled modes. React will print a warning about this.

#### Controlled Input

React becomes the single source of truth for the value of an input

```tsx
function AllCaps() {
  const [capitalizedValue, setCapitalizedValue] = useState("");

  return (
    <input
      type="text"
      value={capitalizedValue}
      onChange={(e) => setCapitalizedValue(e.target.value.toUpperCase())}
    />
  );
}
```

#### Uncontrolled Input

In this case, we rely on browser APIs, but if another component
needed to "see" the value of `input`, we would need to swap it to
a controlled input.

```tsx
import { useId } from "react";

function Form() {
  const id = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.forEach((value, key) => {
      console.log({ key, value });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>username</label>
      <input id={id} type="text" name="username" required />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Prop getters

This pattern is used to help us gain access to custom behavior, or attributes
that we want to enforce on our components, while still leaving room for us
to define how the markup should look like.

```tsx
import { useRef } from "react";
import { useButton } from "react-aria";

function Button(props) {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}
```

## Global State Management 101

- https://frontendmastery.com/posts/the-new-wave-of-react-state-management/

As the application grows we start to see the following issues, regardless
of framework, but let's zoom in React-like apps:

- Various components across the app require the same data
- Composition starts to forbid DRY code
- We make too much DRY code
- Prop drilling makes the app stiff
- Small changes in state can lead to massive re-render cycles
- We need to consume and mutate loads of server data
- Harder to keep up big design changes
- Several people contribute to the project

This is when a Global State Management tool comes in handy.

In general these try to create a dependency tree, that sits on top of a
small state piece, often called atom.

From atoms, various forms of derived data can be generated, and read
anywhere in the application. The state manager takes care of re-rendering
only the pieces that have changed.

This helps us keep various parts of the UI flexible, we can read state right
where it is needed, knowing that we won't be penalized with performance dips.

We can place our business logic within the state manager, and just use
React to render UI.

### Signals, a new kid on the block

- https://preactjs.com/blog/introducing-signals/
- https://blog.axlight.com/posts/demystifying-create-react-signals-internals/
- https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob

## Exercise

Explore the app. What changes, improvements can we make?

- Try to implement the TODO list.
