# W04D01 - Intro to CSS

### To Do
* [ ] Demo this week's project
* [ ] Semantic Tags
* [ ] Attributes
* [ ] Intro to CSS
* [ ] Inline styles
* [ ] Style element
* [ ] Selectors
* [ ] DevTools
* [ ] Box Model and Box Sizing
* [ ] External Stylesheets
* [ ] CSS Resets/Normalize
* [ ] Specificity

You'll notice that while this week has more new concepts (every week will), our approach to teaching with you will adjust a bit. Overall, as the weeks progress, there is less emphasis on giving you all the resources, functions, and tips that you need to complete an activity. There will be more expectation for you to poke around until you find an answer.

This means that during a lecture, if/when a new concept comes up that you don't fully understand, consider writing it down and researching it post-lecture. There are too many new things that you'll encounter directly or tangentially in the morning lecture for everyone to ask "What's XYZ?". That is a question for Google before it should become one for us. We're happy to discuss XYZ with you once you've spent some time trying to understand it for yourself.

### Semantic HTML
* From [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
  > In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
* We've already seen semantics when we use descriptive names for variables and functions in JavaScript
* HTML gives us access to many [semantic tags](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) to better describe our documents
* Consider: 

  ```html
  <div>My Awesome Page</div>
  <div>
    <div>
      <img src="https://via.placeholder.com/150" />
      <div>A picture of me</div>
    </div>
  </div>
  <div>More about me</div>
  <div>Copyright &copy; 2019</div>
  ```

  Versus:

  ```html
  <header>My Awesome Page</header>
  <main>
    <figure>
      <img src="https://via.placeholder.com/150" />
      <figcaption>A picture of me</figcaption>
    </figure>
  </main>
  <aside>More about me</aside>
  <footer>Copyright &copy; 2019</footer>
  ```

* By using semantics, we can convey the _meaning_ of our markup to other developers who read our code as well as people using assistive devices to browse our site

### **C**ascading **S**tyle **S**heets
* CSS is a [programming language](https://notlaura.com/css-is-a-programming-language/) that allows us to style our webpages
* Can be added inline, embedded in a style element, or stored in an external file and linked in the head of the HTML file

#### Inline

```html
<div style="width: 90px; height: 250px;"></div>
```

#### Style Element

```html
<style>
  body {
    color: lawngreen;
  }
</style>
```

#### External Stylesheet

```css
/* styles.css */
body {
  background-color: lightsalmon;
}
```

```html
<!-- index.html -->
<link rel="stylesheet" href="./styles.css" />
```

### Selectors
* CSS is based around using [selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to apply certain styles to specific areas of the document

```css
/* syntax */
selector list {
  property: value;
}

/* we can select by element name */
div { ... }
/* comma separate to style multiple elements */
div, p, a, aside { ... }

/* by class name */
.my-class { ... }
/* element with a class name */
div.my-class { ... }

/* by id */
#my-id { ... }
/* element with id */
div#my-id { ... }
```

### DevTools
* The Chrome DevTools are your best friend when developing client-side
* Make heavy use of the `Elements` tab and the `Styles` section

### Box Model
* The HTML elements on a web page can be considered `boxes`
* These `boxes` consist of (from outside-in) margin, border, padding, and content
* **Margin**: controls the space between elements
* **Border**: as it sounds, a border around the content and padding
* **Padding**: the space between the elements content and its border
* **Content**: the actual content of the element (eg. text or image)

![w3schools box model image](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/box+model.png)
*Image taken from [w3schools](https://www.w3schools.com/css/css_boxmodel.asp)*

### CSS Resets
* Browsers actually style every page that we visit using a special stylesheet called the **user agent stylesheet**
* These styles are not consistent across browsers which can mean that our pages display differently on different browsers (obviously not ideal)
* CSS resets are stylesheets that help to _reset_ or _normalize_ all styles on the page before we apply our own styles
* This helps us present a more consistent style across various different browsers

### Box Sizing
* By default, the `width` and `height` of an element is only applied to its content
* Any padding, border, and margin will then be **added** to the content width and height resulting in elements that take up more space than we had intended
* Enter the `box-sizing` property which allows us to control this behaviour
* If we set the `box-sizing` property to a value of `border-box`, then the `width` and `height` of the element will apply to the entire element (border, padding, and content) resulting in elements with more predictable dimensions
* [Interactive demo](http://guyroutledge.github.io/box-model/)

### Specificity
* CSS styles are applied in order from least specific to most specific
* This means that more-specific styles will overwrite less-specific styles
* We can take advantage of this fact to make sure that the styles that we want are applied correctly
* Least specific to most specific: element => class => id => inline style

```css
/* example styles of increasing specificity */
/* element selector */
div {
  border-color: magenta;
}

/* element + class selector */
div.green-border {
  border-color: green;
}

/* element + id selector */
div#blue-border {
  border-color: blue;
}
```

![Specificity](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png)

### Opinions

![opinions opinions opinions](https://media.makeameme.org/created/opinions-opinions-everywhere-j7cvn5.jpg)

Front-end development is a chance for us to express our creativity. Creativity leads to many different ways of solving the same problem. Different ways of solving the same problem lead to people forming opinions about "the best way" to do something. Having opinions isn't a bad thing! Just keep in mind that the articles you read, videos you watch, and the mentors that help you, may have different, sometimes conflicting, approaches.

### Useful Links
* [MDN - Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
* [HTML5 Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [MDN - Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
* [CSS Specificity](https://dev.to/emmawedekind/css-specificity-1kca)
