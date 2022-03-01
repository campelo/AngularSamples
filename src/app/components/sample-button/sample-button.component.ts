import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample-button',
  templateUrl: './sample-button.component.html',
  styleUrls: ['./sample-button.component.scss']
})
export class SampleButtonComponent{
  @Input() text: string = ''
  @Input('disabled') isDisabled: boolean = false
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  click() {
    this.onClick.emit()
  }
}
