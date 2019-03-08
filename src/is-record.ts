/**
 * is-record
 * Type-guard for Record
 */

import is from '@sindresorhus/is'
import Record from 'timeseries-record'


/**
 * Type-guard for `Record`.
 */
export default function isRecord(object: any): object is Record {
    return !is.undefined(object.Time) && is.number(object.Time)
        && !is.undefined(object.Open) && is.number(object.Open)
        && !is.undefined(object.High) && is.number(object.High)
        && !is.undefined(object.Low) && is.number(object.Low)
        && !is.undefined(object.Close) && is.number(object.Close)
        && !is.undefined(object.Volume) && is.number(object.Volume)
}
