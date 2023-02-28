# SSR

React is capable of doing server side rendering (SSR).

More precisely it is `react-dom`, that can walk a React tree, and generate an HTML string.

There are various methods available for this, non exhaustive list:

- renderToString
- renderToStaticMarkUp

## Example

```jsx
import "./styles.css";

import { renderToString } from "react-dom/server";

const Footer = () => {
  return (
    <footer>
      <p>{`Copyright © ${new Date().getFullYear()} Sample Company`}</p>
    </footer>
  );
};

// const Footer = () => {
//   return (
//     <footer>
//       <p>Copyright © {new Date().getFullYear()} Sample Company</p>
//     </footer>
//   );
// };

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>

      <Footer />
    </>
  );
}

// we don't render just log to the console what `renderToString` outputs
console.log(renderToString(<App />));
```

## Meta frameworks

Setting up a server, and handling of all of the SSR is certainly possible, but achieving SPA transitions,
proper routing, and data fetching optimisations, are challenging, not only do we have to account for
client side code, but also server side code.

This is where the so called meta frameworks appear:

- Next.js
- Remix
- Gatsby
- Astro (the React parts)

These help us abstract away all of the scaffolding that supports SSR, and let us continue writing "just React".

### Pokemon Capture

- Repository: https://github.com/icyJoseph/next-js-react-gbg
- App: https://next-js-react-gbg.vercel.app/
- Slides: https://windy-fold.surge.sh

Takeaways:

- Data fetching functions
- Pre-rendering at build time
- Rendering on-demand
- Incremental Static Regeneration
- API Routes
- Still just React
