# A React App

There's plenty of good documentation in the classic and beta docs:

- Classic: https://reactjs.org/docs/getting-started.html
- Beta: https://beta.reactjs.org/

It is probably a good idea to give preference, and invest time on the
beta docs.

## JSX

An extension to JavaScript, so that we can represent objects using an
XML like syntax.

```jsx
const element = <h1 title="foo">Hello</h1>;

const container = document.getElementBy("root");

ReactDOM.render(element, container);
```

When a file containing JSX is parsed, the parser replaces the JSX with a JavaScript
object.

It is actually possible, albeit perhaps useless, to control how JSX is replaced with
objects, by defining a jsx pragma. The default pragma is, usually, `React.createElement`.

Without JSX we would write:

```js
const About = () => {
  return createElement(
    Fragment,
    null,
    createElement(
      "head",
      null,
      createElement("title", null, "About"),
      createElement("meta", { name: "name", content: "meta tag content" })
    ),
    createElement("div", null, createElement("h1", null, "Hello world"))
  );
};
```

- https://codesandbox.io/s/friendly-nash-wgk7x?file=/src/Reactive.js
- https://dev.to/ryansolid/jsx-is-not-hyperscript-61i
- https://egghead.io/learn/react/beginners/wtf-is-jsx

## Elements and Components

A React element:

```jsx
const element = <p>lorem ipsum</p>;
```

A React component:

```jsx
const App = () => <div>Million dollar app!</div>;
```

## Rendering, and Browser paint

When React does a so called render, it calls the function that describes
the UI associated with a component, where the change has happened.

> A React app re-renders because state has changed, somewhere. In React 18
> there's an exception to this with external stores.

Calling the function gives React an element, which is just a JavaScript
object, that is then used to "reconciliate" the UI.

Where a change is observed, fine grained mutations are executed. Once all of the
React work is done, the browser paint kicks in.

Not all React renders, lead to browser paints.

### The Loop

#### Mount

There's no current description of the UI associated with this component.
React does all of the work to append this UI into the DOM.

#### State Change

React is notified of a state change, typically because a state setter, or
reducer dispatch function is called.

#### Render

Because state, somewhere, has changed, React starts at the place were state
was changed, and from there starts to generate a new description of the UI.

This description is compared with the current UI.

#### Commit

If there's any changes that require changes to the DOM, React executes them.

- https://web.dev/rendering-performance/#the-pixel-pipeline

## Classes, HoCs and Render Props

Originally, React used classes, because the concept of a class leans
more naturally into extending React's core capabilities into your business
logic.

Developers loved to use Classes to create Higher Order Components, which
take up the responsibility of managing data, while allowing others to
focus on just presentation.

```jsx
const withGitHub = (Component) => {
  class WithGitHubData extends React.Component {
    state = { github: null };

    componentDidMount() {
      fetchGitHubData().then((data) => this.setState(data));
    }

    render() {
      if (!github) return <div>Loading...</div>;

      return <Component {...this.props} github={github} />;
    }
  }
};

const Profile = ({ title, github }) => <h1 title={title}>{github.login}</h1>;

const GitHubProfile = withGitHub(Profile);

const App = () => (
  <main>
    <GitHubProfile title="Dev" />
  </main>
);
```

However, sharing business logic with classes was not trivial.

- It required us to wrap the the entire target component

So, we came up with Render Props.

```jsx
// render props
```

HoCs were great, but required us to wrap
an entire component to be able to inject our logic.

Render Props could target specific parts of the JSX, but created
complexity as soon as more than one behavior had to be reused.

Anything that can be made with HoCs, can be made with Render props, a
nd in turn, those things can be made with Hooks.

```jsx
// HoCs, render-props, hooks
```

## Hooks

Today we use Hooks.

Hooks only work in Function components.

They are literally a hook into React's core, which allows us to describe
the UI, and let React figure out what state applies to a given component
instance at any given time.

## Can we see what's React really doing?

- https://codesandbox.io/s/currying-morning-m1oop

## Exercise

### Search Dogs

This site has a nice search component:

- https://dog.ceo/dog-api/breeds-list

Let's try to re-implement the missing parts.

1. Get the list of dogs for the selector
2. On `Fetch!`, replace the dog image

### Card component

CSS Modules and Styled Components.

#### Styled Components

