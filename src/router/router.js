import { createWebHistory, createRouter} from 'vue-router'
import Home from '../components/home.vue'
import Step_1 from '../steps/StepFirst.vue'
import Step_1_Registration from '../steps/RegistrationFrom.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/step_1',
    component: Step_1
  },
  {
    path: '/step_2_registration',
    component: Step_1_Registration,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router