import HelpModeDialog from '../../src/components/HelpModeDialog.vue'

describe('<HelpModeDialog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelpModeDialog)
  })

  it('clicking Next button should emit show-next event', () => {
    const onShowNext = cy.spy().as('onShowNext')
    cy.mount(HelpModeDialog, {
      props: {
        showNext: onShowNext,
      }
    })
    .then(({ wrapper, component }) => {
      cy.get('.el-button:not(.secondary)').click()
      .then(() => {
        expect(wrapper.emitted('show-next')).to.have.length(1)
      })
    })
  })

  it('clicking Finish button should emit finish-help-mode event', () => {
    const onFinishHelpMode = cy.spy().as('onFinishHelpMode')
    cy.mount(HelpModeDialog, {
      props: {
        finishHelpMode: onFinishHelpMode,
      }
    })
    .then(({ wrapper, component }) => {
      cy.get('.el-button.secondary').click()
      .then(() => {
        expect(wrapper.emitted('finish-help-mode')).to.have.length(1)
      })
    })
  })
})
