# Help Mode Dialog

A modal dialog for help mode, linked to the help tooltips of Flatmapvuer, Multiflatmapvuer and Scaffoldvuer components, but also usable with other components.


## Installation

_Not yet published to the npm registry._
```Bash
npm install @abi-software/help-mode-dialog
```


## Usage

```Vue
<template>
  <HelpModeDialog
    v-if="helpMode && useHelpModeDialog"
    ref="multiflatmapHelp"
    :multiflatmapRef="multiflatmapRef"
    :lastItem="helpModeLastItem"
    @show-next="onHelpModeShowNext"
    @finish-help-mode="onFinishHelpMode"
  />
</template>

<script>
import { HelpModeDialog } from '@abi-software/help-mode-dialog'

export default {
  components: { HelpModeDialog },
  data: {
    helpMode: true,
    useHelpModeDialog: true,
    multiflatmapRef: null,
    helpModeLastItem: false,
  },
  methods: {
    onHelpModeShowNext: function () {
      // move to next tooltip
    },
    onFinishHelpMode: function () {
      // close help mode dialog
    }
  }
}
</script>
```


## API Reference

API reference is available on [GitHub Pages website](https://akhuoa.github.io/help-mode-dialog/components/HelpModeDialog.html).


## Development

After cloning the repo:

```Bash
npm install
```

Dev mode:
```Bash
npm run serve
```
The component is in `src/components`.

Build bundle:
```Bash
npm run build-bundle
```

ESLint:
```Bash
npm run lint
```


### Component Testing
Component testing for local development:
```Bash
npm run test:open
```
The component's test file is in `cypress/component`.


### API Documentation

The API documentation is developed with `vitepress` and `vuese`. Documentation pages are in the `docs` folder.

To run in local development mode:
```bash
npm run docs:watch
```

This will start the documentation server with `vitepress` on port `:5173` and watch the components' changes.


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
