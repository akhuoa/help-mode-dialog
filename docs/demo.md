# Vue Component Template Live Demo

## Live Demo

<div class="demo-container">
  <div class="demo-container-inner">
    <ClientOnly>
      <HelpModeDialog
        v-if="helpMode && useHelpModeDialog"
        ref="multiflatmapHelp"
        :multiflatmapRef="multiflatmapRef"
        :lastItem="helpModeLastItem"
        @show-next="onHelpModeShowNext"
        @finish-help-mode="onFinishHelpMode"
      />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

defineProps({
  helpMode: {
    type: Boolean,
    default: true,
  },
  helpModeActiveItem: {
    type: Number,
    default: 0
  },
  helpModeLastItem: {
    type: Boolean,
    default: false
  },
  useHelpModeDialog: {
    type: Boolean,
    default: true
  },
  multiflatmapRef: {
    type: Object,
    default: null
  },
});

const HelpModeDialog = defineClientComponent(() => {
  return import("../src/components/HelpModeDialog.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <HelpModeDialog
      v-if="helpMode && useHelpModeDialog"
      ref="multiflatmapHelp"
      :multiflatmapRef="multiflatmapRef"
      :lastItem="helpModeLastItem"
      @show-next="onHelpModeShowNext"
      @finish-help-mode="onFinishHelpMode"
    />
  </div>

  <script>
    import HelpModeDialog from '@abi-software/help-mode-dialog'

    export default {
      components: { HelpModeDialog },
    }
  </script>
```
