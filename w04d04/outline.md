# Outline

### Responsive Design
* From [Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design):
> Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.

### Viewport Meta Tag
* Demo `index.html` without the viewport tag on a mobile device using DevTools
* Show how it scrolls horizontally off the screen
* Add the viewport meta tag and show how it now fits on the screen

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Relative Units
* Instead of using absolute sizes (`px`, `pt`, `in`), we can use relative units of measure

### Percentages
* Width, height, font-size, and a variety of other dimensions can be specified as a percentage
* Percentage is based on the dimensions of the parent element, not the webpage itself
* eg. If the parent is `300px` wide and the child has a width of `50%`, then the child will be `150px` wide

```css
div {
  height: 150px;
  width: 20%; /* change this one ! */
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

* Show how the height percentage only works if the parent has an explicit height

```css
section {
  height: 300px; /* add this */
  border: 2px solid black;
}

section div {
  height: 50%; /* this one! */
  width: 20%;
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### `vh` and `vw`
* One `vh` is equal to `1%` of the viewport height
* An element with a style of `height: 50vh;` will be 50% the height of the screen
* `vw` works the same way except it's `1%` of the viewport width

### `em` and `rem`
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

### `max-width` && `min-width`
* `max-width` and `min-width` are used to set a maximum and minimum width respectively
* The element will not grow beyond the `max-width` nor shrink below the `min-width`
* Useful for making sure that your responsive elements don't grow or shrink to a point where they break the layout

### Media Queries
* Media queries allow us to make changes to our design based on the user's device
* There are two parts to a media query: a **media type** and a **media feature**
* The options for _media types_ are `screen`, `print`, `speech`, and `all`
* _Media features_ include things like `aspect-ratio`, `device-height`, and `orientation`
* We can use multiple media queries to target various device sizes and orientations

```css
@media only screen and (max-width: 500px) {
  /* these styles will be applied if the screen width is less than 500px */
  body {
    background-color: lightblue;
  }
}

@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

* You can also specify certain style sheets

```html
<link rel="stylesheet" media="screen and (min-width: 1200px)" href="large.css">
```


- [ ] CSS Preprocessors
- [ ] Intro to Sass/SCSS
  - [ ] Variables
  - [ ] Nesting
  - [ ] Partials
  - [ ] Extending Styles
  - [ ] Mixins
