import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('cssEngine/align/index.ts', 'dist/align/index'),
  createBundle('cssEngine/border/index.ts', 'dist/border/index'),
  createBundle('cssEngine/borderStyle/index.ts', 'dist/borderStyle/index'),
  createBundle('cssEngine/boxShadow/index.ts', 'dist/boxShadow/index'),
  createBundle('cssEngine/color/index.ts', 'dist/color/index'),
  createBundle('cssEngine/customCSS/index.ts', 'dist/customCSS/index'),
  createBundle('cssEngine/fontFamily/index.ts', 'dist/fontFamily/index'),
  createBundle('cssEngine/fontSize/index.ts', 'dist/fontSize/index'),
  createBundle('cssEngine/fontStyle/index.ts', 'dist/fontStyle/index'),
  createBundle('cssEngine/fontWeight/index.ts', 'dist/fontWeight/index'),
  createBundle('cssEngine/height/index.ts', 'dist/height/index'),
  createBundle('cssEngine/letterSpacing/index.ts', 'dist/letterSpacing/index'),
  createBundle('cssEngine/lineHeight/index.ts', 'dist/lineHeight/index'),
  createBundle('cssEngine/margin/index.ts', 'dist/margin/index'),
  createBundle('cssEngine/maxAndMin/index.ts', 'dist/maxAndMin/index'),
  createBundle('cssEngine/opacity/index.ts', 'dist/opacity/index'),
  createBundle('cssEngine/padding/index.ts', 'dist/padding/index'),
  createBundle('cssEngine/radius/index.ts', 'dist/radius/index'),
  createBundle('cssEngine/textAlign/index.ts', 'dist/textAlign/index'),
  createBundle('cssEngine/textDecoration/index.ts', 'dist/textDecoration/index'),
  createBundle('cssEngine/textShadow/index.ts', 'dist/textShadow/index'),
  createBundle('cssEngine/textTransform/index.ts', 'dist/textTransform/index'),
  createBundle('cssEngine/width/index.ts', 'dist/width/index'),
  createBundle('css-engine-v2/margin/index.ts', 'dist/css-engine-v2/margin/index'),
  createBundle('css-engine-v2/padding/index.ts', 'dist/css-engine-v2/padding/index')
]