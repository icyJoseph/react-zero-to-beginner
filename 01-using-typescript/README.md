# TypeScript

A superset of JavaScript.

Because JavaScript is weakly typed, and it has implicit coercion, we might
run into unconventional situations, for example:

```js
1 + "2"; // 12
```

TypeScript brings static type analysis to JavaScript.

It helps us to define interfaces and types, which helps us eliminate bugs, and greatly
increase our development experience.

The TypeScript compiler outputs JavaScript, even in the presence of type errors, though
this is configurable.

## Setup

Make sure TypeScript is installed in your project, or that you have access
to the compiler in your system. It is called `tsc`.

```
tsc --init
```

It'll setup TypeScript with sensible defaults. However, most of the time
we rely on a toolchain to do this for us.

## Why did TypeScript win over Flow?

For a workshop, we could boil it down to two reasons:

- Good products
  - TypeScript
  - VSCode
- American Markering

Facebook's Flow was did not catch on, it was scoped mostly to Facebook Open Source
products, and there was no killer app to promote its usage.

## The Spectrum

- Vanilla JavaScript
- Babel JavaScript
- TypeScript
- PureScript
- ReasonML
- Elm

## LSP

One could also make the case that the Language Server Protocol is what made
TypeScript so successful.

Once you started to code in VSCode, and saw the autocomplete coming around,
you knew there was no way back to writing plain JavaScript.

## In a nutshell

JavaScript has 7 primitive types:

- string
- number
- boolean
- undefined
- null
- symbol
- bigint

And these have a corresponding type in TypeScript.

```ts
let age: number = 33;
const name: string = "Joseph";
```

We can say that everything else, is an object. That is, Arrays, Functions, Classes,
constructors, Objects, etc...

### Unions

Type composition

```ts
type States = "loading" | "error" | "idle" | "empty";

const currentStatus: States = "idle"; // ok
```

Not limited to same type:

```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}

type Fish = {
  swim(): void;
  layEggs(): void;
};

type Pets = Bird | Fish;
```

### Type and Interface

> Bike-shedding warning

We can define an interface, or a type like so:

```ts
interface Foo {
  (): void;
  bar: string;
}

type Engine = {
  version: number;
};
```

### Functions

We can either, type the entire function, type the arguments, or type the return type.

```ts
type Fullname = (fistName: string, lastName: string) => string;

const getFullname: Fullname = (first, last) => `${first} ${last}`;

const fetchProfile = (user: string): Promise<{ user: string }> => {
  return Promise.resolve().then(() => ({ user }));
};
```

We can also peek get the types for arguments and return type, for a given function, using
TypeScript's utility types:

```ts
type FullnameArgs = Parameters<typeof getFullname>; // [firstName: string, lastName: string]

type FullnameReturn = ReturnType<typeof getFullname>;
```

These are useful when you have no access to the actual type definition, or when you prefer
to define the function first, and infer the type information from it.

### Awaited

Since TypeScript version 4.5, we have access to an utility type called Awaited.

```ts
const fetchProfile = (user: string): Promise<{ user: string }> => {
  return Promise.resolve().then(() => ({ user }));
};

type UserProfile = Awaited<typeof fetchProfile>;
```

However, it is possible to implement this utility type, manually:

```ts
type MyOwnAwait<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

type UserProfile = MyOwnAwait<typeof fetchProfile>;
```

This makes use of Generics, conditional types, and the `infer` keyword.

#### Generics

It is often the case that we want to be able to work with a variety of types,
rather than just one.

In TypeScript we do this with generics.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

const idem = <Type>(arg: Type): Type => {
  return arg;
};
```

### Other utility types

- https://www.typescriptlang.org/docs/handbook/utility-types.html

```ts
type MyPartial<Type> = {
  [key in keyof Type]?: Type[key];
};

type MyRequired<Type> = {
  [key in keyof Type]-?: Type[key];
};
```

## Narrowing out of a union

We can execute different code paths for each member of a union.

```ts
type Leaf = {
  value: number;
};

type Root = {
  children: Leaf[];
};

type TreeNode = Root | Leaf;

const getValue = (node: TreeNode) => {
  if ("children" in node) return 0;

  return node.value;
};
```

## Intersection

Unlike a union type, that tells which values a type might take, an intersection
calculates a type that fits all possible members of the intersection.

```ts
type Impossible = string & number;

type Both = { a: number } & { b: string };
let both: Both = { a: 0, b: "0" };
```

## All of the types

```ts
/* primitive */
boolean
number
string
null
undefined
bigint
symbol

/* composite */
string[]
Array<string> // there's two ways to define a list
[string, number]  // a tuple
string | null | undefined   // a union

/* get your type theory hat */
any // all types
void // not to be confused with void 0 or void promise, but kind of the same
never // should not be possible
unknown // we don't know the type,
// so we can't assign it to anything, but any or unknown itself
```

> And there's `enums` but we don't have time for that right now.

- https://mariusschulz.com/blog/the-unknown-type-in-typescript

## Exercises

- Type the User object
- Create `enumerate` function


