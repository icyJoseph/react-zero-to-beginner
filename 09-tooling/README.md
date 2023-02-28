# Tooling

Modern JavaScript development sits on the shoulders of giants.

## Babel

Arguably one of the first stepping stones for JavaScript as it is today.

Babel allowed us to write modern JavaScript, that could be shipped to any browser.

For example, if we wanted this code, to run in IE11:

```js
const foo = () => {};
```

Babel would compile/transpile into:

```
"use strict";

var foo = function foo() {};

```

Because IE11 doesn't support arrow functions.

> Try more at https://babeljs.io/repl

## ESLint

A linter is useful when it can help us catch "potential issues".

In a world with type-checking available, how does ESLint fit in?

Today it is most helpful to avoid issues with a11y, and it is also good to
enforce certain coding style rules, automatically.

It parses the code, and checks the resulting Abstract Syntax Tree (AST), against
a set of rules.

For example, one might use AirBnB's javascript code style ESLint rules.

- img tags should always have an alt attribute
- unused assignments
- consistent return inside functions

## Prettier

Unlike ESLint, Prettier is all about how the code looks like. It is a formatter.

The idea is that all code written by the team should look the same.

Out with personal conventions, the team decides on what rules the formatter, Prettier,
should apply, and it is automatically done. You can still code with your preferred
style, but at the end of the day the code will be formatted to match the team style.

Is there overlap with ESLint? Yes, some ESLint rules, require formatting changes,
for example, line length.

## TypeScript

Within this context, as part of a JavaScript tooling list, TypeScript is more of Babel
replacement.

You write code in TypeScript's abstraction, and it take care of giving you back
code that can run on your preferred target.

```ts
const foo: VoidFunction = () => {};
```

After `tsc` (typescript compiler), we get:

```js
"use strict";
var foo = function () {};
```

> Try more at https://www.typescriptlang.org/play

## Webpack, RollUp, Parcel

All of the code we write, has to ultimately, be put together, so that a browser
can understand how to run our application.

That's what these tools do. They make sure that all of our code hiearchy is respected.

Babel/TypeScript would output files that browsers can understand, but there's nothing
to glue everything together.

WebPack makes sure to create bundles that put together all of the necessary code, so that
at the end we can just inline script tags onto our page, and it'll behave exactly as it did
during development.

- https://www.innoq.com/en/articles/2021/12/what-does-a-bundler-actually-do/
- https://snipcart.com/blog/javascript-module-bundler
- https://lihautan.com/what-is-module-bundler-and-how-does-it-work/ 

## SWC, esbuild

JavaScript compilers. You read that correctly.

These tools are written in languages such as Rust and Go, and the compiler is a
binary executable.

This executable can go through JavaScript, and TypeScript, transforming everything
according to settings we can control.

At the other side of the compiler, we have JavaScript, minified, optimized, mangled,
compressed to the point that's hard to read for humans, but is faster to transfer
over HTTP.

There's also the development experience boost, since the code can be transformed
so quickly, our compile cycles while developing are shorter, so we get feedback
on our changes faster.

Consider that certain component libraries contain thousands of modules, and dependencies
for development environments. Any gain is welcomed.

- https://github.com/swc-project/swc/issues/6039

> Playground https://swc.rs/playground
