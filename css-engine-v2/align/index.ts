import { AlignValues, AlignXValues, AlignYValues } from './types'
 /**
 * Prensa | align
 * @param value [AlignValues, AlignXValues, AlignYValues]
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
 export const align = (value: [AlignValues, AlignXValues, AlignYValues]) => {
 
   let a = {}
   let ax = {}
   let ay = {}
 
   const align = value[0]
   const alignx = value[1]
   const aligny = value[2]
 
   switch (align) {
     case 'row':
       a = {flexDirection: 'row'}
       break
     case 'row-reverse':
       a = {flexDirection: 'row-reverse'}
       break
     case 'column':
       a = {flexDirection: 'column'}
       break
     case 'column-reverse':
       a = {flexDirection: 'column-reverse'}
       break
   }
 
   if (align === 'column' || align === 'column-reverse') {
     switch (alignx) {
       case 'left':
         ax = { alignItems: 'flex-start' }
         break
       case 'center':
         ax = { alignItems: 'center' }
         break
       case 'right':
         ax = { alignItems: 'flex-end' }
         break
       case 'evenly':
         ax = { justifyContent: 'space-evenly' }
         break
       case 'between':
         ax = { justifyContent: 'space-between' }
         break
       }
   }
 
   if (align === 'row' || align === 'row-reverse') {
     switch (alignx) {
       case 'left':
         ax = { justifyContent: 'flex-start' }
         break
       case 'center':
         ax = { justifyContent: 'center' }
         break
       case 'right':
         ax = { justifyContent: 'flex-end' }
         break
       case 'evenly':
         ax = { justifyContent: 'space-evenly' }
         break
       case 'between':
         ax = { justifyContent: 'space-between' }
         break
     }
   }
 
   if (align === 'column' || align === 'column-reverse') {
     switch (aligny) {
       case 'top': 
         ay = { justifyContent: 'flex-start' }
         break
       case 'middle': 
         ay = { justifyContent: 'center' }
         break
       case 'bottom': 
         ay = { justifyContent: 'flex-end' }
         break
       case 'evenly': 
         ay = { justifyContent: 'space-evenly' }
         break
       case 'between': 
         ay = { justifyContent: 'space-between' }
         break
     }
   }
 
   if (align === 'row' || align === 'row-reverse') {
     switch (aligny) {
       case 'top': 
         ay = { alignItems: 'flex-start' }
         break
       case 'middle': 
         ay = { alignItems: 'center' }
         break
       case 'bottom': 
         ay = { alignItems: 'flex-end' }
         break
       case 'evenly': 
         ay = { justifyContent: 'space-evenly' }
         break
       case 'between': 
         ay = { justifyContent: 'space-between' }
         break
     }
   }
 
   return { display: 'flex', ...a, ...ax, ...ay }
 }
 