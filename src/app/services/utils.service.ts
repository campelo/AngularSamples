import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private DATE_FORMAT: string = "YYYY-MM-DD"

  tryParseToDate(value: any): Date | undefined {
    if (value == undefined)
      return undefined
    if (this.isValidMoment(value))
      return value.toDate()
    if (this.isDateString(value))
      return moment(value, this.DATE_FORMAT).toDate()
    return undefined
  }

  private isValidMoment(value: any): boolean {
    return value.isValid
  }

  private isDateString(value: any): boolean {
    return value.length == 10 && moment(value, this.DATE_FORMAT).isValid()
  }
}
