# fontmin-loader

[![Build Status](https://travis-ci.org/SnO2WMaN/fontmin-loader.svg?branch=master)](https://travis-ci.org/SnO2WMaN/fontmin-loader)
[![Dependency Status](https://beta.gemnasium.com/badges/github.com/SnO2WMaN/fontmin-loader.svg)](https://beta.gemnasium.com/projects/github.com/SnO2WMaN/fontmin-loader)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Font minify loader for webpack.

**Original Source**

[Hakatashi / iwashi](https://github.com/hakatashi/iwashi/blob/master/lib/fontmin-loader.js)

[MIT Licence](https://github.com/hakatashi/iwashi/blob/master/LICENSE)

## Install

```
npm install fontmin-loader

yarn add fontmin-loader
```

## Usage

_webpack.config.js_

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: [
            { loader: "url-loader" },
            { loader: "font-min-loader" }
        ]
      }
    ]
  }
}
```

_css_

```
@font-face{
    font-family:"font name"
    src:url("fontpath.ttf") format("woff")
}
```

## Option

### Subset

Compress by glyph.

_webpack.config.js_

```
{
    loader: "font-min-loader" ,
    options:{
        text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
}
```

### OpenType

`font-min-loader` supports default `.ttf`

but for `.otf`

_webpack.config.js_

```
{
    loader: "font-min-loader" ,
    options:{
        otf:true
    }
}
```

_css_

```
@font-face{
    font-family:"font name"
    src:url("fontpath.otf") format("woff")
}
```
