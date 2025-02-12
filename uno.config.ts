import { mergeConfigs } from '@unocss/core'
// From unpress-template/nuxt-layer/uno.config.mjs
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  // your overrides
}])
