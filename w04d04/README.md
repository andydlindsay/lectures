# Responsive Design and SASS

### To Do
- [ ] Responsive Design
- [ ] CSS Responsive Design Features
- [ ] Flexbox
- [ ] CSS Preprocessors
- [ ] Intro to Sass

### Responsive Design
* From [Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design):
> Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.

### CSS Responsive Design Features
* CSS provides us with some tools to help make our designs more responsive
* They include:

#### Media Queries
* Media queries allow us to make changes to our design based on the width/height of the user's screen

```css
@media screen and (max-width: 500px) {
  /* these styles will be applied if the screen width is less than 500px */
  body {
    background-color: lightblue;
  }
}
```

* We can use multiple media queries to target various different screen sizes and resolutions
* We are not just limited to `screen` queries, we can also target `print`, and `speech`

#### Percentages
* Instead of specifying element dimensions using pixels, we can use percentages instead to help things scale appropriately for various display sizes

```css
p {
  width: 50%;
}
```

* Bear in mind that the percentage is based on the dimensions of the parent element, not the webpage itself
* eg. If the parent is `300px` wide and the child has a width of `50%`, then the child will be `150px` wide

#### Ems/Rems
* An `em` is a relative measure based on the font-size of the parent component
* eg. If the parent has a font-size of `24px` and the child is `3em` wide, then it will be `72px` wide
* A `rem` is a **relative** _em_, instead of being based on the parent's font-size, it is based on the font-size of the body
* Using _rems_ 

#### `max-width` && `min-width`

#### Viewport

#### Border-Box

#### CSS Variables

### Flexbox

### CSS Preprocessors
* A CSS preprocessor generates CSS using a [Domain Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language)
* Popular preprocessors include [Sass](https://sass-lang.com/), [LESS](http://lesscss.org/), [Stylus](https://stylus-lang.com/), and [PostCSS](https://postcss.org/)

### Sass
* **S**yntactically **A**wesome **S**yle **S**heets
* 

### Useful Links
* [MDN CSS Preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
* []()
