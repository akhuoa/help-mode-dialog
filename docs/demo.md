# Vue Component Template Live Demo

## Live Demo

<div class="demo-container">
  <div class="demo-container-inner">
    <ClientOnly>
      <HelpModeDialog
        title="Vue Component Template"
      />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const HelpModeDialog = defineClientComponent(() => {
  return import("../src/components/HelpModeDialog.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <HelpModeDialog
      title="Vue Component Template"
    />
  </div>

  <script>
    import HelpModeDialog from '@abi-software/help-mode-dialog'

    export default {
      components: { HelpModeDialog },
    }
  </script>
```
