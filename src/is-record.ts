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
    return !is.nullOrUndefined(object)
        && !is.nullOrUndefined(object.Time) && is.number(object.Time) && !is.nan(object.Time)
        && !is.nullOrUndefined(object.Open) && is.number(object.Open) && !is.nan(object.Open)
        && !is.nullOrUndefined(object.High) && is.number(object.High) && !is.nan(object.High)
        && !is.nullOrUndefined(object.Low) && is.number(object.Low) && !is.nan(object.Low)
        && !is.nullOrUndefined(object.Close) && is.number(object.Close) && !is.nan(object.Close)
        && !is.nullOrUndefined(object.Volume) && is.number(object.Volume) && !is.nan(object.Volume)
}
