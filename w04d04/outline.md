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
* _Media features_ include things like `aspect-ratio`, `device-height`, `light-level`, and `orientation`
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

### CSS Preprocessors
* A CSS preprocessor generates CSS using a [Domain Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language)
* Styles are written in this _language_ and then [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) into CSS before being served to the client
* Popular preprocessors include [Sass](https://sass-lang.com/), [LESS](http://lesscss.org/), [Stylus](https://stylus-lang.com/), and [PostCSS](https://postcss.org/)

### Intro to Sass
* **S**yntactically **A**wesome **S**yle **S**heets
* Sass gives us some useful features to make writing our CSS easier
* **SCSS** or _Sassy CSS_ is a superset of CSS
* A superset is a language that extends another language by adding new features
* But the browser doesn't understand SCSS, so we have to transpile our SCSS into CSS before serving it

### Sass CLI
* [npm sass](https://www.npmjs.com/package/sass)

```sh
npm i -g sass

sass --watch input.scss output.css

# source folder:output folder
sass --watch app/sass:public/stylesheets

# no source map
sass --watch input.scss output.css --sourcemap=none
```

### Variables

```scss
// variables
$font-color: lightblue;
$font-size: 1.2rem;

p {
  color: $font-color;
}
h1 {
  font-size: $font-size;
}
```

### Nesting

```scss
// using nesting
.container {
  p {
    color: magenta;
    text-decoration: underline;
  }
  div {
    border: 1px solid black;
  }
}
```

### Partials

```scss
// _variables.scss
$font-size: 24px;
$border-width: 10px;
$border-color: hotpink;
$border-style: dotted;
$border: $border-width $border-style $border-color;
```

```scss
// styles.scss
@import '_variables';
```

### Extending Styles

```scss
.header-text {
  font-size: 2em;
  font-family: 'sans-serif';
}

.heading {
  @extend .header-text;
  color: rebeccapurple;
}
```

#### Mixins
* A **mixin** is like a function that returns a group of styles
* The _mixin_ can be included in any other style by using `@include`

```scss
// declare the mixin
@mixin header-styles {
  height: 50px;
  background-color: $header-bg;
}

// include it in another style
header {
  @include header-styles();
}

// mixins can take parameters as well
@mixin box-sizes($n) {
  height: $n;
  width: $n;
  line-height: $n;
}

.box {
  @include box-sizes(15px);
  border: 1px solid green;
}
```
