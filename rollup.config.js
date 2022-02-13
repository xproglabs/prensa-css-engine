import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('cssEngine/align/index.ts', 'dist/align/index', 'align'),
  createBundle('cssEngine/boxShadow/index.ts', 'dist/boxShadow/index', 'boxShadow'),
  createBundle('cssEngine/height/index.ts', 'dist/height/index', 'height'),
  createBundle('cssEngine/margin/index.ts', 'dist/margin/index', 'margin'),
  createBundle('cssEngine/padding/index.ts', 'dist/padding/index', 'padding'),
  createBundle('cssEngine/width/index.ts', 'dist/width/index', 'width'),
]
  