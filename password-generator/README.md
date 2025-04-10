# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/password-generator-desktop-view.png)

### Links

- Solution URL: [https://github.com/anamaydev/FrontEndMentor/tree/main/password-generator](https://github.com/anamaydev/FrontEndMentor/tree/main/password-generator)

- Live Site URL: [https://anamaydev.github.io/FrontEndMentor/password-generator/index.html](https://anamaydev.github.io/FrontEndMentor/password-generator/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
- Basically `NodeList` only contains `.forEach()` and not `map()`, `.filter()` or `.reduce()`. So using `Array.from(__NodeList__)` 
  we can convert the NodeList to Array
```js
checkedBoxesArray = Array.from(checkboxes).filter(checkbox => checkbox.checked);
```

## Author

- Frontend Mentor - [@anamaydev](https://www.frontendmentor.io/profile/anamaydev)