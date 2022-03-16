import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('cssEngine/align/index.ts', 'dist/align/index', 'align'),
  createBundle('cssEngine/border/index.ts', 'dist/border/index', 'border'),
  createBundle('cssEngine/border/borderStyle/index.ts', 'dist/borderStyle/index', 'borderStyle'),
  createBundle('cssEngine/boxShadow/index.ts', 'dist/boxShadow/index', 'boxShadow'),
  createBundle('cssEngine/color/index.ts', 'dist/color/index', 'color'),
  createBundle('cssEngine/customCSS/index.ts', 'dist/customCSS/index', 'customCSS'),
  createBundle('cssEngine/height/index.ts', 'dist/height/index', 'height'),
  createBundle('cssEngine/margin/index.ts', 'dist/margin/index', 'margin'),
  createBundle('cssEngine/maxAndMin/index.ts', 'dist/maxAndMin/index', 'maxAndMin'),
  createBundle('cssEngine/padding/index.ts', 'dist/padding/index', 'padding'),
  createBundle('cssEngine/radius/index.ts', 'dist/radius/index', 'radius'),
  createBundle('cssEngine/width/index.ts', 'dist/width/index', 'width')
]