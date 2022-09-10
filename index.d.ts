declare type ColorNameTitleCase = "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenRod" | "DarkGray" | "DarkGrey" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkSlateGrey" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DimGrey" | "DodgerBlue" | "FireBrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "GoldenRod" | "Gray" | "Grey" | "Green" | "GreenYellow" | "HoneyDew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenRodYellow" | "LightGray" | "LightGrey" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSlateGrey" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquaMarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenRod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "RebeccaPurple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "SlateGrey" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen";
declare type ColorNameLowerCase = Lowercase<ColorNameTitleCase>;
declare type ColorNameUpperCase = Uppercase<ColorNameTitleCase>;
declare type ColorName          = ColorNameLowerCase | ColorNameTitleCase | ColorNameUpperCase;

declare type ANSIEscapeCodeColor = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";

declare type RGB  = `rgb(${number}, ${number}, ${number})` | `rgb(${number} ${number} ${number})`;
declare type RGBA = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number} ${number} ${number} / ${number}%)` | `rgb(${number} ${number} ${number} / ${number}%)` | `rgb(${number} ${number} ${number} / ${number})`;
declare type HEX  = `#${string}`;
declare type HSL  = `hsl(${number} ${number}% ${number}%)` | `hsl(${number}deg ${number}% ${number}%)` | `hsl(${number}rad ${number}% ${number}%)` | `hsl(${number}turn ${number}% ${number}%)` | `hsl(${number}, ${number}%, ${number}%)` | `hsl(${number}deg, ${number}%, ${number}%)` | `hsl(${number}rad, ${number}%, ${number}%)` | `hsl(${number}turn, ${number}%, ${number}%)`;
declare type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})` | `hsla(${number}deg, ${number}%, ${number}%, ${number})` | `hsla(${number}rad, ${number}%, ${number}%, ${number})` | `hsla(${number}turn, ${number}%, ${number}%, ${number})` | `hsla(${number} ${number}% ${number}% / ${number}%)` | `hsla(${number}deg ${number}% ${number}% / ${number}%)` | `hsla(${number}rad ${number}% ${number}% / ${number}%)` | `hsla(${number}turn ${number}% ${number}% / ${number}%)`;
declare type HWB  = `hwb(${number} ${number}% ${number}%)` | `hwb(${number}deg ${number}% ${number}%)` | `hwb(${number}rad ${number}% ${number}%)` | `hwb(${number}turn ${number}% ${number}%)` | `hwb(${number} ${number}% ${number}% / ${number}%)` | `hwb(${number}deg ${number}% ${number}% / ${number}%)` | `hwb(${number}rad ${number}% ${number}% / ${number}%)` | `hwb(${number}turn ${number}% ${number}% / ${number}%)` | `hwb(${number} ${number}% ${number}% / ${number})` | `hwb(${number}deg ${number}% ${number}% / ${number})` | `hwb(${number}rad ${number}% ${number}% / ${number})` | `hwb(${number}turn ${number}% ${number}% / ${number})`;

declare type RGBObject = {
  red  : number;
  green: number;
  blue : number;
} | {
  r: number;
  g: number;
  b: number;
}
declare type RGBAObject = {
  red  : number;
  green: number;
  blue : number;
  alpha: number | string;
} | {
  r: number;
  g: number;
  b: number;
  a: number | string;
}

declare type HSLObject = {
  hue       : number | string;
  saturation: number | string;
  lightness : number | string;
} | {
  h: number | string;
  s: number | string;
  l: number | string;
}

declare type HSLAObject = {
  hue       : number | string;
  saturation: number | string;
  lightness : number | string;
  alpha     : number | string;
} | {
  h: number | string;
  s: number | string;
  l: number | string;
  a: number | string;
}

declare type HWBObject = {
  hue       : number | string;
  whiteness : number | string;
  blackness : number | string;
  alpha    ?: number | string;
} | {
  h : number | string;
  w : number | string;
  b : number | string;
  a?: number | string;
}

declare type Color = RGB | RGBA | HEX | HSL | HSLA | HWB | ColorName | RGBObject | RGBAObject | HSLObject | HSLAObject | HWBObject;
