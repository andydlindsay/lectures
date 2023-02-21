import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

storiesOf("Button Component", module)
  .add("displays on screen", () => <Button></Button>)
  .add("shows children as button text", () => <Button>Register</Button>)
  .add("can be clicked on", () => (
    <Button click={() => console.log("clicked!")}>Login</Button>
  ))
  .add("can be clicked on using action", () => (
    <Button click={action("does it change??")}>Login</Button>
  ))
  .add("shows as blue when passed 'primary'", () => (
    <Button mode="primary" click={action('click')}>
      Logout
    </Button>
  ))
  .add("shows as pink when passed 'secondary'", () => (
    <Button secondary click={action('click')}>
      Add Favourite
    </Button>
  ));
