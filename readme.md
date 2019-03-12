# is-record [![Build status](https://travis-ci.org/strong-roots-capital/is-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/is-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/is-record.svg)](https://npmjs.org/package/@strong-roots-capital/is-record) [![codecov](https://codecov.io/gh/strong-roots-capital/is-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/is-record)

> Type-guard for Record

## Install

``` shell
npm install @strong-roots-capital/is-record
```

## Use

``` typescript
import isRecord from '@strong-roots-capital/is-record'

const object = fetchMysteryObject()
if (isRecord(object)) {
    console.log(object.Volume) // ok
} else {
    console.log(object.Volume) // potential error!
}
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
