import empty from './app.vue'
import test from './views/test/route'

const routes = [
  {
    path: '/',
    component: empty,
    children: test
  },
]

export default routes
