import type { Fn } from '../../../robot-ts/types'
import SignIn from './sign-in'
import covid19 from './covid-19'
import Weibo from './weibo'

interface Plugins {
  message: Fn[]
  notice: Fn[]
}

const plugins: Plugins = {
  message: [SignIn, covid19, Weibo],
  notice: [],
}

export default plugins
