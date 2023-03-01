# Server Components

- A React RFC: https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md

> A different mental model.

A Server Component runs only server side, and it is able to fetch data
asynchronously. The way it is meant to be, using `async/await`.

If interactivity is necessary, then a Client Component can be included
on the page structure. Client components use a directive `'use client'`;.

Client Components are also rendered server side, to collect the UI they
describe.

> This example uses Next.js' implementation of the RFC!
