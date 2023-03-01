# Static Site

Client - Server model.

Back in the day:

- Client makes a request for a page
- Server generates HTML, somehow
- Sends over HTTP
- Client shows the HTML contents

Today, things have changed, slightly:

- Client makes a request for a page
- Server generates HTML, somehow
- Sends over HTTP
- Client shows the HTML contents
- Client executes JavaScript
- More HTML nodes are added to the DOM
- Data is fetched via XHR abstractions

## Build your own React

> Or why would I need a framework, I am super smart!

It is a good idea to remind ourselves, that building a framework is possible,
however, as your product becomes more complex, you'd want to be able to move
fast, implement new features, change existing ones, with total confidence.

On top of that, you are probably better off involving other stakeholders onto your
development process.

All major web development frameworks:

- support the idea of components
- have extensive communities who have solved common UI problems
- have protection against XSS
- are written in such a way that engines can optimize certain code paths

Though it is a good exercise to try and implement your own mini-framework:

- https://pomb.us/build-your-own-react/
- https://github.com/ged-odoo/blockdom/blob/main/doc/make_your_own_framework/readme.md

And then let it rot in a GitHub repository.

> What's up with components? https://www.componentdriven.org/

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

const container = document.getElementById("root");

const node = document.createElement(element.type);

node["title"] = element.props.title;

const text = document.createTextNode("");

text["nodeValue"] = element.props.children;

node.appendChild(text);

container.appendChild(node);
```

## SEO

> And people with JS disabled

Most client side rendered(CSR) apps, are but a shell, that'll be filled in by the
runtime.

If we request a CSR page from an HTTP client, other than a browser, we'll only see
the shell.

That means that, if we wanted our content to be parsed by Bots/Crawlers, these would
have to be able to run JavaScript.

Depending on the important SEO presence for a business, this might be a deal breaker.

## Gaining Experience

Visit these pages, using a browser and other type of HTTP clients

- https://hidden-attribute.surge.sh/
- https://next-js-react-gbg.vercel.app/
- https://lethal-crayon.surge.sh/
- https://massive-magic.surge.sh/

- https://surge.sh/help/adding-a-200-page-for-client-side-routing
