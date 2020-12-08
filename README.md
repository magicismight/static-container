## static-container [![npm version](https://badge.fury.io/js/static-container.svg)](http://badge.fury.io/js/static-container)
---

A React component wrapper for update performance improvement.

Example

### EXAMPLE

Wrap any components inside `StaticContainer` and set `shouldUpdate={false}`.

The children inside  `StaticContainer` will not be updated from parent life cycle.

Use it wisely.

```js
import React from 'react';
import StaticContainer from 'status-container';

function SomeComponent() {
  return (
    <StaticContainer shouldUpdate={false}>
      <TheComponentWillNeverUpdated />
    <StaticContainer/>
  )
}

```
