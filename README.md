# parse-prop-types

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/parse-prop-types.svg?style=flat-square)](https://npmjs.org/package/parse-prop-types)
[![Build Status](https://img.shields.io/travis/diegohaz/parse-prop-types/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/parse-prop-types) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/parse-prop-types/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/parse-prop-types/branch/master)

Parses React `prop-types` into a readable object at runtime.

## Install

    $ npm install --save parse-prop-types

## Usage

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import parsePropTypes from 'parse-prop-types'

const MyComponent = ({ name, show }) => (
  show ? <div>{name}</div> : null
)

MyComponent.propTypes = {
  name: PropTypes.string,
  show: PropTypes.oneOfType([PropTypes.bool, propTypes.string]).isRequired,
}

MyComponent.defaultProps = {
  name: 'Haz',
}

parsePropTypes(MyComponent)
```

The returned object is compatible with [`react-docgen`](https://github.com/reactjs/react-docgen):

```js
{
  name: {
    type: {
      name: 'string',
    },
    required: false,
    defaultValue: {
      value: 'Haz',
    },
  },
  show: {
    type: {
      name: 'oneOfType',
      value: [
        { name: 'bool' },
        { name: 'string' },
      ],
    },
    required: true,
  },
}
```

**IMPORTANT:** To avoid issues reading any component's propTypes, it is recommendable importing this package before defining your components' propTypes or before import any third-party component. Import this package in your entry point file could be a great option.

    // index.js (entry point file)
    import "parse-prop-types";

## Why not [`react-docgen`](https://github.com/reactjs/react-docgen)?

[`react-docgen`](https://github.com/reactjs/react-docgen) reads file contents in order to find prop types definitions. It has some limitations, such as not allowing computed prop types and, in several situations, not being able to parse file contents correctly.

`parse-prop-types`, on the other hand, doesn't deal with file contents. Instead, it parses prop types at runtime by receiving the component object itself.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

## License

MIT © [Diego Haz](https://github.com/diegohaz)
