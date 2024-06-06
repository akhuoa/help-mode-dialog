<script setup>
import HelpModeDialog from './components/HelpModeDialog.vue';

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

const onHelpModeShowNext = () => console.log('Show Next Item')
const onFinishHelpMode = () => console.log('Help Mode Finish!')
</script>

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

<style scoped>
/* Component Styles */
</style>
