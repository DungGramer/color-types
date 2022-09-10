# Color Types

| Type definitions for color  
![](https://img.badgesize.io/DungGramer/color-types/master/index.d.ts.svg?label=File_size)
![](https://img.badgesize.io/DungGramer/color-types/master/index.d.ts.svg?compression=gzip)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/DungGramer/color-types/blob/master/LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/DungGramer/color-types/issues)

## Usage

Add library to tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["color-types"]
  }
}
```

## Format of library support

| Format    | Support
| ------    | -------
| Color name| ✅
| Hex       | ✅
| RGB       | ✅
| RGBA      | ✅
| HSL       | ✅
| HSLA      | ✅
| HWB       | ✅

## Example
```ts
const color: ColorName = 'red';
const color: HEX       = '#ff0000';
const color: RGB       = 'rgb(255, 0, 0)';
const color: RGBA      = 'rgb(255 0 0 / 100%)' | 'rgba(255, 0, 0, 1)';
const color: HSL       = 'hsl(0deg 100% 50%)';
const color: HSLA      = 'hsla(0rad, 100%, 50%, 1)';
const color: HWB       = 'hwb(0turn 0% 0%)';

const color: RGBObject  = { r: 255, g: 0, b: 0 } || { red: 255, green: 0, blue: 0 };
const color: RGBAObject = { r: 255, g: 0, b: 0, a: 1 } || { red: 255, green: 0, blue: 0, alpha: 1 };
const color: HSLObject  = { h: 0, s: 100, l: 50 } || { hue: 0, saturation: 100, lightness: 50 };
const color: HSLAObject = { h: 0, s: 100, l: 50, a: 1 } || { hue: 0, saturation: 100, lightness: 50, alpha: 1 };
const color: HWBObject  = { h: 0, w: 0, b: 0 } || { hue: 0, whiteness: 0, blackness: 0 } || { hue: 0, whiteness: 0, blackness: 0, aplha: 1 };

// All of type color
const color: Color = 'red' || '#ff0000' || 'rgb(255, 0, 0)';
```
