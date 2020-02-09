* progressive framework: you can plug it in to just a part of your application
* component-based
* reactive: when the data changes, the view re-renders

```html
<div id="root">
  <h2>Hello {{ name }}</h2>
</div>

<script>
  const app = new Vue({
    el: '#root',
    data: {
      name: 'Alice'
    }
  });
</script>
```

* [vue lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
* computed properties
* vue devtools
