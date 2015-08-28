var alt = require('alt');

class AdminActions {
  constructor() {
    this.generateActions(
      'addAtrativos',
      'deleteAtrativos'
    )
  }
}

module.exports = alt.createActions(AdminActions);