import grapesjs from 'grapesjs/dist/grapes.min.js'

import { getPageSlug } from '../../page'
import { Page } from '../../types'

const pluginName = 'eleventy'

export const eleventyPlugin = grapesjs.plugins.add(pluginName, (editor, opts) => {
  // editor.on(opts.eventStart || 'publish:start', data => {
  //   data.pages.forEach((page: Page, idx) => {
  //     const file = data.files[idx]
  //     file.css = `---
pe// rmalink: /css/${getPageSlug(page.name)}.css
--// -
${// file.css}
`
  //     page.cssExt = '.liquid'
  //   })
  // })
})
