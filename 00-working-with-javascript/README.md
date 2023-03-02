# Working with JavaScript

## Runtimes

- Node
- Chromium
- Deno
- Bun

## Engines

- V8 (Chrome)
- JavaScript Core (Safari)
- SpiderMonkey

## JavaScript

JavaScript's real name is ECMAScript.

Every year a new revision of the language standard is published.

After several years without change, ES5 was published, as the first
major revision to the language.

There are several reason for JavaScript's success:

- Powerful engines, with JIT
- ES5 and ES6
- Community driven tooling

## Exercise

- Day 1 AoC 2022

Make sure to appreciate:

- Functions as first class citizens
- Functional style

## JavaScript toolbox

- Statements and expressions
- DOM API manipulation
- String interpolation, template strings
- Destructuring, rest, spread
- Array iteration methods
- Truthy and falsy
- Asynchronous work

```js
console.log("First");

setTimeout(function () {
  console.log("Second");
}, 0);

new Promise(function (res) {
  res("Third");
}).then(console.log);

console.log("Fourth");

// First, Fourth, Third, Second
```

## Compiled/Transpiled JavaScript?

An web application has to be bundled, minified, and made compatible with as
many browsers as we need.

In general, because JavaScript is interpreted, the target engine has to be
able to read our code.

However, developers want to use the latest and greatest features, which means
we need a tool that can bridge the gap between what we write and what we ship.

CoffeeScript was such as tool, then came Babel. Later came TypeScript, and
today we have esbuild (Go), and SWC (Rust), which are already compiled binaries
that can walk our JavaScript/TypeScript files, and output an application
that works in the engines we care about.

- https://esbuild.github.io/
- https://swc.rs/
