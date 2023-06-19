# Outline

### Responsive Design
* From [Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design):
> Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.

### Viewport Meta Tag
* `width=device-width` tells the browser to set the width of the page to the width of the device
* `intial-scale=1.0` sets the initial zoom level of the page to `1.0` (or 100%)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Units of Measure
* Absolute sizes: `px`, `pt`, `in`
* Relative sizes: `%`, `vh`, `vw`, `em`, `rem`

### Percentages
* percentage of the parent

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

* `height` percentage only works if the parent has an explicit height

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

### `max-width` && `min-width`

```css
section div {
  height: 50%;
  width: 20%;
  min-width: 100px; /* this one */
  max-width: 150px; /* this one */
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### `vh` and `vw`

```css
section div {
  height: 50vh; /* this one */
  width: 20vw; /* this one */
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### `em` and `rem`

```css
section div {
  height: 40rem; /* this one */
  width: 25em; /* this one */
  border: 2em dotted orange; /* this one */
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### Media Queries
* **media type** and **media feature**
* Media types: `screen`, `print`, `speech`, and `all`
* Media features: `aspect-ratio`, `device-height`, `light-level`, and `orientation`

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

### Intro to Sass
* **S**yntactically **A**wesome **S**yle **S**heets (Sassy CSS)

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

### Sass CLI
* [npm sass](https://www.npmjs.com/package/sass)

```sh
# install globally
npm i -g sass

# output to console
sass input.scss

# output to file
sass input.scss output.css

# file watcher
sass input.scss output.css --watch

# no source map
sass input.scss output.css --watch --no-source-map

# source folder:output folder
sass app/sass:public/stylesheets --watch 
sass sass:stylesheets --watch --no-source-map

# get rid of .sass-cache
sass main.scss output.css --no-source-map --no-cache  
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

// you can omit the underscore
@import 'variables';
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
@mixin make-square($n) {
  height: $n;
  width: $n;
  font-size: ($n / 2);
  border: ($n / 4) solid black;
}

.small-square {
  @include make-square(4em);
}

.med-square {
  @include make-square(30px);
}
```
