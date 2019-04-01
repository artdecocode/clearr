# clearr

[![npm version](https://badge.fury.io/js/clearr.svg)](https://npmjs.org/package/clearr)

`clearr` Updates The String To Remove `\r` (Carriage Return) Just Like The Terminal Would Do.

```sh
yarn add -E clearr
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`clearr(string: string): string`](#clearrstring-string-string)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import clearr from 'clearr'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `clearr(`<br/>&nbsp;&nbsp;`string: string,`<br/>`): string`

Clears the carriage return like the terminal would.

```js
/* alanode example/ */
import clearR from 'clearr'

const res = clearR('...\r..?\r.!')
console.log(res)
```
```
.!?
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>