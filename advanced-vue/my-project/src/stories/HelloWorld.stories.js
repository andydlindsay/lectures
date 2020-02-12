import Vue from 'vue';
import HelloWorld from '../components/HelloWorld';

export default { title: 'Hello World Component' };

export const withText = () => '<hello-world>with text</hello-world>';

export const withEmoji = () => '<hello-world>😀 😎 👍 💯</hello-world>';

export const asAComponent = () => ({
  components: { HelloWorld },
  template: '<hello-world></hello-world>'
});
