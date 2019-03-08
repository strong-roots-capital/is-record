import test from 'ava'
import Record from 'timeseries-record'

/**
 * Library under test
 */

import isRecord from '../src/is-record'

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
        t.pass()
    } else {
        t.fail()
    }
})
