# Form-wave-animation

This is apart of the 50 projects in 50 days challenge and is the eighth project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

- To create a animation on the label, where each of the letter of the word (e.g. email and password) are animated so it looks like a wave. The challenge involves HTML, CSS and Javascript.

### Screenshot

# Mobile Preview 

![screenshot](https://github.com/romila2003/Form-wave-animation/blob/main/Mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Form-wave-animation/blob/main/Mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Form-wave-animation/blob/main/Desktop%20preview.PNG)

# Desktop Preview - active

![screenshot](https://github.com/romila2003/Form-wave-animation/blob/main/Desktop%20preview%20-%20active.PNG)


### Links

 - Source code: [https://github.com/romila2003/Form-wave-animation](https://github.com/romila2003/Form-wave-animation)
 - Live website: [https://form-wave-animation-main.netlify.app/](https://form-wave-animation-main.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Vanilla Javascript
- Flexbox

### What I learned

I learned a new concept that allows you to manipulate the html property within the javascript and turn each letter of a word, into a span. This concept was very interesting and intend to use it in future projects. I also used the email validation concept within this project too.

Javascript - `.map` and `.join`:

```javascript

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>` )
        .join("")
});

```

### Continued development

For future developments, I should implement the features/concepts learned over the last few projects and future projects, into practical projects/challenges such as the frontendmentor.io projects.


## Author

- Twitter - [@romila003](https://www.twitter.com/romila003)
- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
