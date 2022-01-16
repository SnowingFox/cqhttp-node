import type { Fn } from '../../types'
import SignIn from './sign-in'
import covid19 from './covid-19'

interface Plugins {
  message: Fn[]
  notice: Fn[]
}

const plugins: Plugins = {
  message: [SignIn, covid19],
  notice: [],
}

export default plugins
