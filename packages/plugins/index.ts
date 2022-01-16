import type { Fn } from '../../types'
import SignIn from './sign-in'

interface Plugins {
  message: Fn[]
  notice: Fn[]
}

const plugins: Plugins = {
  message: [SignIn],
  notice: [],
}

export default plugins
