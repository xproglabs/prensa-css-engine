import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('cssEngine/align/index.ts', 'dist/align/index', 'align'),
  createBundle('cssEngine/border/index.ts', 'dist/border/index', 'border'),
  createBundle('cssEngine/borderStyle/index.ts', 'dist/borderStyle/index', 'borderStyle'),
  createBundle('cssEngine/boxShadow/index.ts', 'dist/boxShadow/index', 'boxShadow'),
  createBundle('cssEngine/color/index.ts', 'dist/color/index', 'color'),
  createBundle('cssEngine/customCSS/index.ts', 'dist/customCSS/index', 'customCSS'),
  createBundle('cssEngine/fontFamily/index.ts', 'dist/fontFamily/index', 'fontFamily'),
  createBundle('cssEngine/fontSize/index.ts', 'dist/fontSize/index', 'fontSize'),
  createBundle('cssEngine/fontStyle/index.ts', 'dist/fontStyle/index', 'fontStyle'),
  createBundle('cssEngine/fontWeight/index.ts', 'dist/fontWeight/index', 'fontWeight'),
  createBundle('cssEngine/height/index.ts', 'dist/height/index', 'height'),
  createBundle('cssEngine/letterSpacing/index.ts', 'dist/letterSpacing/index', 'letterSpacing'),
  createBundle('cssEngine/lineHeight/index.ts', 'dist/lineHeight/index', 'lineHeight'),
  createBundle('cssEngine/margin/index.ts', 'dist/margin/index', 'margin'),
  createBundle('cssEngine/maxAndMin/index.ts', 'dist/maxAndMin/index', 'maxAndMin'),
  createBundle('cssEngine/padding/index.ts', 'dist/padding/index', 'padding'),
  createBundle('cssEngine/radius/index.ts', 'dist/radius/index', 'radius'),
  createBundle('cssEngine/textAlign/index.ts', 'dist/textAlign/index', 'textAlign'),
  createBundle('cssEngine/textDecoration/index.ts', 'dist/textDecoration/index', 'textDecoration'),
  createBundle('cssEngine/textShadow/index.ts', 'dist/textShadow/index', 'textShadow'),
  createBundle('cssEngine/textTransform/index.ts', 'dist/textTransform/index', 'textTransform'),
  createBundle('cssEngine/width/index.ts', 'dist/width/index', 'width')
]