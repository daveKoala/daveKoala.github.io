# Why I'm Building Simple Static Sites Again in 2025

After years of working with frameworks like Vue and React, and spending much of my time on backend development, architecture, and CI/CD, I’ve decided to take a step back—back to the fundamentals of HTML, CSS, and JavaScript. This isn't about rejecting modern tools; it's about rediscovering the joy of building something from scratch, without the added layers of abstraction.

## Why Simple Static Sites?

In the early days of the web, a site was just a collection of files—no dependencies, no complex build steps, no JavaScript bundlers. You wrote some HTML, styled it with CSS, added a bit of JavaScript if needed, and it _just worked_. And it worked _fast_. Even on slow connections, these sites loaded quickly and were easy to maintain\*.

Today, the web is more powerful than ever, but also more bloated. Many sites ship hundreds of kilobytes (or megabytes) of JavaScript just to display a few paragraphs of text. While frameworks solve real problems, they also introduce complexity that isn’t always necessary—especially for content-driven, mostly static websites.

\*If you took some care managing resources like images

## Why This Approach Still Makes Sense in 2025

1. **Performance & Simplicity** – No client-side hydration, no virtual DOM, no unnecessary JavaScript. Just fast, efficient pages that load instantly.
2. **Maintainability** – A simple HTML file is easy to edit. Changes can be handled by modifying the page and pushing through a CI/CD pipeline. No dependencies to update, no breaking changes from framework upgrades.
3. **Resilience** – A plain HTML page will still render even if JavaScript fails. It works across all browsers, even low-powered devices.
4. **The Joy of Creation** – There’s something deeply satisfying about opening an empty folder, writing a few lines of code, and seeing a fully functional website come to life. No need to configure a build system or troubleshoot dependency issues—just build and ship.

---

### Parkinson’s Law of the Web

> Just as a rucksack expands to fit everything you _might_ need, modern websites often expand to consume all available resources—bandwidth, memory, CPU—just because they can. This is known in software as **bloat**. Tools that promise efficiency can, over time, introduce complexity, dependencies, and unnecessary overhead.
>
> Sometimes, the simplest approach is still the best. A static site, built with just HTML, CSS, and JavaScript, loads fast, runs anywhere, and remains easy to maintain. Just because we _can_ use massive frameworks for every project doesn’t mean we _should_.

---

## Project Setup

This project follows a minimalistic approach:

- **No build steps** – Just HTML, CSS, and JavaScript.
- **Simple hosting** – A static file server or CDN.
- **CI/CD for updates** – Push changes, and they go live.

To update the site:

1. Edit the necessary files (`.html`, `.css`, `.js`).
2. Commit and push changes.
3. Let the CI/CD pipeline deploy automatically.

That’s it—no unnecessary complexity!

---

This is my way of embracing a _simpler_ web—fast, efficient, and enjoyable to build. If it worked well in the days of dial-up, it still makes sense today.
