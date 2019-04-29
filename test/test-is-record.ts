import test from 'ava'
import Record from 'timeseries-record'

/**
 * Library under test
 */

import isRecord from '../src/is-record'

test('should not recognize null objects', t => {
    t.false(isRecord(null))
})

test('should not recognize undefined objects', t => {
    t.false(isRecord(undefined))
})

test('should recognize Records', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.true(isRecord(record))
})

test('should recognize Records with extra members', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0,
        extra: 'member'
    }
    t.true(isRecord(record))
})

test('should not recognize Records without Time', t => {
    const record = {
        // Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records without Open', t => {
    const record = {
        Time: 0,
        // Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records without High', t => {
    const record = {
        Time: 0,
        Open: 0,
        // High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records without Low', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        // Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records without Close', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        // Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records without Volume', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        // Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with Time of improper type', t => {
    const record = {
        Time: '0',
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with Open of improper type', t => {
    const record = {
        Time: 0,
        Open: '0',
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with High of improper type', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: '0',
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with Low of improper type', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: '0',
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with Close of improper type', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: '0',
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with Volume of improper type', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: '0'
    }
    t.false(isRecord(record))
})

test('should not recognize an empty object', t => {
    t.false(isRecord({}))
})

test('should function as a type-guard', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0,
        oldMacDonaldHadA: 'horse'
    }
    if (isRecord(record)) {
        let record2: Record = record
        t.true(record2.Time === 0)
    } else {
        t.fail()
    }
})

test('should not recognize Records with null Time', t => {
    const record = {
        Time: null,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with null Open', t => {
    const record = {
        Time: 0,
        Open: null,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with null High', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: null,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with null Low', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: null,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with null Close', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: null,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with null Volume', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: null
    }
    t.false(isRecord(record))
})

test('should not recognize Records with NaN Time', t => {
    const record = {
        Time: NaN,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with NaN Open', t => {
    const record = {
        Time: 0,
        Open: NaN,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with NaN High', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: NaN,
        Low: 0,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with NaN Low', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: NaN,
        Close: 0,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with NaN Close', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: NaN,
        Volume: 0
    }
    t.false(isRecord(record))
})

test('should not recognize Records with NaN Volume', t => {
    const record = {
        Time: 0,
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Volume: NaN
    }
    t.false(isRecord(record))
})
