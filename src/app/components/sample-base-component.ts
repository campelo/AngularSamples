import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({ template: "" })
export abstract class SampleBaseComponent implements ControlValueAccessor {
  @Input()
  label: string = ""
  @Input()
  required: boolean = false

  onChange: any = () => { }
  onTouched: any = () => { }
  disabled: boolean = false
  value: any

  public abstract doReset(): void

  public doSetValue(obj: any): void {
    this.value = obj
  }

  public shouldReset(): boolean {
    return !this.value
  }

  writeValue(obj: any): void {
    this.doSetValue(obj)
    this.reset()
    this.onChange(obj)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  onChangeValue(obj: any): void {
    this.onChange(obj?.target?.value)
  }

  onBlur(): void {
    this.onTouched()
  }

  reset(): void {
    if (this.shouldReset()) {
      this.doReset()
    }
  }

}