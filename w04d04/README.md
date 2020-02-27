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
* Media queries allow us to make changes to our design based on the user's device
* There are two parts to a media query: a **media type** and a **media feature**
* The options for _media types_ are `screen`, `print`, `speech`, and `all`
* _Media features_ include things like `aspect-ratio`, `device-height`, and `orientation`
* We can use multiple media queries to target various device sizes and orientations

```css
@media screen and (max-width: 500px) {
  /* these styles will be applied if the screen width is less than 500px */
  body {
    background-color: lightblue;
  }
}
```

#### Percentages
* Instead of specifying element dimensions using pixels, we can use percentages to help things scale appropriately for various display sizes
* Bear in mind that the percentage is based on the dimensions of the parent element, not the webpage itself
* eg. If the parent is `300px` wide and the child has a width of `50%`, then the child will be `150px` wide

#### `vh` and `vw`
* One `vh` is equal to `1%` of the viewport height
* An element with a style of `height: 50vh;` will be 50% the height of the screen
* `vw` works the same way except it's `1%` of the viewport width

#### `em` and `rem`
* An `em` is a relative measure based on the font-size of the parent component
* eg. If the parent has a font-size of `24px` and the child is `3em` wide, then it will be `72px` wide
* A `rem` is a **root** _em_, instead of being based on the parent's font-size, it is based on the font-size of the root element (html)

```css
/* pixels */
p.pixel {
  width: 200px;
  height: 400px;
}

/* vh and vw */
p.viewport {
  width: 25vw;
  height: 50vh;
  font-size: 10vh;
}

/* em and rem */
p.relative {
  width: 25em;
  height: 40rem;
  border-width: 2em;
}
```

#### `max-width` && `min-width`
* `max-width` and `min-width` are used to set a maximum and minimum width respectively
* The element will not grow beyond the `max-width` nor shrink below the `min-width`
* Useful for making sure that your responsive elements don't grow or shrink to a point where they break the layout

#### Viewport Meta Tag
* We can add a `meta` tags to the `head` element of our html
* 

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
* [CSS Tricks: Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
* []()
