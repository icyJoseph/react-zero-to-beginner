# Testing

Jest, Vitest, and your precious time on this planet.

These test utilities are great! They help us build UI with confidence, but often
having to invest time learning how to setup one of this, is rather wasteful.

Google's your friend. I found these two:

- https://www.linkedin.com/pulse/setting-up-rtl-vite-react-project-william-ku/
- https://hung.dev/posts/jest-vite

I chose the first one because I wanted to try out Vitest.

## React Testing Library

A set of utilities to help us test our UI, in such a way that resembles how the UI will be used.

- https://testing-library.com/docs/react-testing-library/intro/

## MSW

- https://github.com/osadi/msw-talk

Mocked Service Worker, is a piece of technology that uses Workers, to intercept network requests,
so that we can mock responses, for testing, development and debugging.

## Exercise

- Test OctoCat, which uses the GitHub GraphQL API.
- Test useDebounceValue