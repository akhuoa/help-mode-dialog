import HelpModeDialog from '../../src/components/HelpModeDialog.vue'

describe('<HelpModeDialog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelpModeDialog)
  })
})
