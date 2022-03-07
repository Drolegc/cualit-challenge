export { default as Auth } from '../..\\components\\auth\\index.vue'
export { default as AuthLoginForm } from '../..\\components\\auth\\loginForm.vue'
export { default as AuthRegisterForm } from '../..\\components\\auth\\registerForm.vue'
export { default as TutorialsEmpty } from '../..\\components\\tutorials\\empty.vue'
export { default as Tutorials } from '../..\\components\\tutorials\\index.vue'
export { default as TutorialsList } from '../..\\components\\tutorials\\list.vue'
export { default as TutorialsNotFound } from '../..\\components\\tutorials\\notFound.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
