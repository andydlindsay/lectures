# External Links

* https://guide.freecodecamp.org/html/html5-semantic-elements/
* https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/profile.jpeg
* http://xahlee.info/js/html5_non-closing_tag.html
* http://guyroutledge.github.io/box-model/
* https://gist.githubusercontent.com/DavidWells/18e73022e723037a50d6/raw/31b030534440f31f3ddcd72c4916cc47eb1be520/reset.css
* https://github.com/necolas/normalize.css/blob/master/normalize.css
* https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png

# Outline

## Demo the Tweeter app

## Part One: Semantic Markup

### Make a page with all divs
* Demo nesting elements

```html
<body>
  <div>My Awesome Page</div>
  <div>
    <div>
      <img src="https://via.placeholder.com/150" />
      <div>A picture of me</div>
    </div>
  </div>
  <div>More about me</div>
  <div>Copyright &copy; 2020</div>
</body>
```

### Semantic tags
* Visit https://guide.freecodecamp.org/html/html5-semantic-elements/
* Refactor code to be more semantic (aside, section, footer, header)

```html
<body>
  <header>My Awesome Page</header>
  <main>
    <figure>
      <img src="https://via.placeholder.com/150" />
      <figcaption>A picture of me</figcaption>
    </figure>
  </main>
  <aside>More about me</aside>
  <footer>Copyright &copy; 2020</footer>
</body>
```

### Attributes
* Discuss attributes on html elements
* img tags have src, alt, height, and/or width
* anchor tags have an href

```html
<a href="https://www.w3schools.com">Visit W3Schools</a>
<img
  src="https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/profile.jpeg"
  alt="profile image"
  height="50px"
  width="75px"
>
```

* https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/profile.jpeg
* Demo img width and height being applied
* Discuss self-closing tags (like img, link)
* http://xahlee.info/js/html5_non-closing_tag.html

### Tags spanning multiple lines
* Show opening tags spanning multiple lines

## Part Two: CSS

### Demo inline style
* Give a div width, height, background-color, and border

### Refactor to use style element and selectors
* Talk about selectors
* Demo classes
* Demo id selectors (there can only be one id per element)

### More selectors
* Comma separated selectors

### DevTools
* Demo Chrome DevTools
  * show picker tool
  * show margin around divs
  * show user agent stylesheet in devtools
  * show style toggling
  * show class/state toggling

### Box Model
* Discuss box-model
  * margin ~> border ~> padding ~> content
* Demo box-sizing: border-box
  * Demo with http://guyroutledge.github.io/box-model/

### External Stylesheets
* Refactor to external stylesheet

### Reset and Normalize
* A reset is removing any default browser styling, often called the user agent stylesheet. The Goal is to remove any browser inconsistencies.
* Demo a reset file like https://gist.githubusercontent.com/DavidWells/18e73022e723037a50d6/raw/31b030534440f31f3ddcd72c4916cc47eb1be520/reset.css
* "normalize.css retains many useful default browser styles. This means that you don’t have to redeclare styles for all the common typographic elements."
* Demo a normalize file like https://github.com/necolas/normalize.css/blob/master/normalize.css
  
### Demo specificity
* Least specific to most specific: element => class => id => inline style
* https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png

## Extras

### Block vs Inline
* demo inline-block

### What not to do
* discuss !important

### Pseudo Selectors
* pseudo selectors (:hover, :active)

### Flexbox
