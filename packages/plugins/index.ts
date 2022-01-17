import type { Fn } from '../../../robot-ts/types'
import SignIn from './sign-in'
import covid19 from './covid-19'
import Weibo from './weibo'
import pornhubIcon from './pornhub-icon'

interface Plugins {
  message: Fn[]
  notice: Fn[]
}

const plugins: Plugins = {
  message: [SignIn, covid19, Weibo, pornhubIcon],
  notice: [],
}

export default plugins
