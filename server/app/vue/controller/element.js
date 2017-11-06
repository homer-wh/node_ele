'use strict';
exports.index = function*() {
  yield this.bindDefault()

  yield this.render('element', {
    siteInfo: this.siteInfo
  })
}
