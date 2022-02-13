import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('cssEngine/align/index.ts', 'dist/align/index', 'align'),
  createBundle('cssEngine/border/index.ts', 'dist/border/index', 'border'),
  createBundle('cssEngine/boxShadow/index.ts', 'dist/boxShadow/index', 'boxShadow'),
  createBundle('cssEngine/color/index.ts', 'dist/color/index', 'color'),
  createBundle('cssEngine/height/index.ts', 'dist/height/index', 'height'),
  createBundle('cssEngine/margin/index.ts', 'dist/margin/index', 'margin'),
  createBundle('cssEngine/padding/index.ts', 'dist/padding/index', 'padding'),
  createBundle('cssEngine/radius/index.ts', 'dist/radius/index', 'radius'),
  createBundle('cssEngine/width/index.ts', 'dist/width/index', 'width')
]