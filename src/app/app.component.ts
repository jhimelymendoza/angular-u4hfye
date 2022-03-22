import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import createNumberMaskMy from './utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly formGroup = this.formBuilder.group({
    maskedInput: '',
  });
  readonly priceMask = {
    mask: createNumberMaskMy({
      allowDecimal: true,
      decimalSymbol: ',',
      integerLimit: 7,
      prefix: 'USD ',
      thousandsSeparatorSymbol: ' ',
    }),
  };

  constructor(private readonly formBuilder: FormBuilder) {}
  ngOnInit(): void {
    console.log('priceMask', this.priceMask.mask);
  }
}
