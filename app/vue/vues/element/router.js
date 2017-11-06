module.exports = {
  routes: [{
    path: '/index',
    component: {
      template: `<h1> Hello element !</h1>`
    }
  }, {
    path: '/ele',
    name: 'ele',
    meta: {
      title: 'element组件'
    },
    component: require('./pages/element.vue')
  }, {
    path: '*',
    redirect: '/index'
  }]
}
