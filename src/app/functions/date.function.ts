import * as moment from "moment"

const DATE_FORMAT: string = "YYYY-MM-DD"

export function tryParseToDate(value: any): Date | undefined {
    if (value == undefined)
        return undefined
    if (isValidMoment(value))
        return value.toDate()
    if (isDateString(value))
        return moment(value, DATE_FORMAT).toDate()
    return undefined
}

export function isValidMoment(value: any): boolean {
    return value.isValid
}

export function isDateString(value: any): boolean {
    return value.length == 10 && moment(value, DATE_FORMAT).isValid()
}