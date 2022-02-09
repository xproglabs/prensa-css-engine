import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('cssEngine/align/index.ts', 'dist/align/align', 'align'),
  createBundle('cssEngine/boxShadow/index.ts', 'dist/boxShadow/boxShadow', 'boxShadow'),
  createBundle('cssEngine/height/index.ts', 'dist/height/boxShadow', 'height'),
  createBundle('cssEngine/margin/index.ts', 'dist/margin/boxShadow', 'margin'),
  createBundle('cssEngine/padding/index.ts', 'dist/padding/padding', 'padding'),
  createBundle('cssEngine/width/index.ts', 'dist/width/boxShadow', 'width'),
]
  