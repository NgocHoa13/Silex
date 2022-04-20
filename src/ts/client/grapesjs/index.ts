import * as grapesjs from 'grapesjs/dist/grapes.min.js'
import openImport from './openImport'

// import { initStorage } from './storage'

let editor

export function initEditor(config) {
  if(editor) throw new Error('Grapesjs editor already created')
  editor = grapesjs.init(config)

  // customize the editor
  ;['text', 'link']
  .forEach(id => editor.Blocks.get(id).set('category', 'Texts'))
  ;['image', 'video']
  .forEach(id => editor.Blocks.get(id).set('category', 'Media'))
  ;['map']
  .forEach(id => editor.Blocks.get(id).set('category', 'Components'))

  editor.Commands.add('gjs-open-import-webpage', openImport(editor, config.importWebpage))
  editor.on('load', () => {
     // // move the options panel to the sidebar
     // const optionsEl = editor.Panels.getPanel('options').view.el
     // editor.Panels.getPanel('project-bar-panel').view.el
     // .appendChild(options)
     // options.style.width = 0
     // options.style.position = 'static'
    // remove blocks and layers buttons from the properties
    setTimeout(() => {
      editor.Panels.getPanel('views').buttons.remove('open-blocks')
      editor.Panels.getPanel('views').buttons.remove('open-layers')
      editor.Panels.getPanel('views').view.el.firstChild.style.justifyContent = 'initial' // align left
      editor.Panels.getPanel('options').buttons.remove('export-template')
    })

    // use the style filter plugin
    editor.StyleManager.addProperty('extra',{ extend: 'filter' })
  })
}

export function getEditor() {
  return editor
}
