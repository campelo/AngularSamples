import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateMin(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value

        if (!value)
            return { nullDate: true }
        
        return minDate <= value ? null : { dateMeneur: true }
    }
}

export function dateMax(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value

        if (!value)
            return { nullDate: true }
        
        return maxDate >= value ? null : { datePlusGrand: true }
    }
}