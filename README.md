# clearr

[![npm version](https://badge.fury.io/js/clearr.svg)](https://npmjs.org/package/clearr)

`clearr` is Updates The String To Remove R (Carriage Return) Just Like The Terminal Would Do.

```sh
yarn add -E clearr
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`clearr(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import clearr from 'clearr'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `clearr(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* alanode example/ */
import clearr from 'clearr'

(async () => {
  const res = await clearr({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>