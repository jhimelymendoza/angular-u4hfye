import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumeric]',
})
export class NumericDirective implements OnInit {
  constructor(private elementRef: ElementRef, private ngControl: NgControl) {}

  ngOnInit(): void {
    this.ngControl.control.valueChanges.subscribe(() => {
      const newValue = this.elementRef.nativeElement.value.replace(/\D/g, '');
      console.log('ssss', this.elementRef.nativeElement.value);
      this.ngControl.control.setValue(newValue, {
        emitEvent: false,
        emitModelToViewChange: false,
        emitViewToModelChange: false,
      });
    });
  }
}
