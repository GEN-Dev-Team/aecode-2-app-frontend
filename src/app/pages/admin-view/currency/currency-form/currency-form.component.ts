import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CurrencyService } from '../../../../core/services/currency.service';
import { ICurrency } from '../../../../models/currency';

@Component({
  selector: 'app-currency-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './currency-form.component.html',
  styleUrl: './currency-form.component.css',
})
export class CurrencyFormComponent {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: ICurrency | null = null;
  currencyList: ICurrency[] = [];
  Currency!: ICurrency;
  currencyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private currencyService: CurrencyService
  ) {
    this.currencyForm = this.fb.group({
      id_currency: new FormControl(0, [Validators.required]),
      currency_name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getCurrencys();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.currencyForm.patchValue({
        id_currency: this.data.id_currency,
        currency_name: this.data.currency_name,
      });
    }
  }

  onSubmit() {
    if (this.currencyForm.valid) {
      if (this.data) {
        this.currencyService.updateCurrency(this.currencyForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Currency updated successfully!');
          },
        });
      } else {
        this.currencyService.createCurrency(this.currencyForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Currency created successfully!');
          },
        });
      }
    } else {
      this.currencyForm.markAllAsTouched();
    }
  }

  getCurrencys() {
    this.currencyService.getAllCurrencies().subscribe({
      next: (response) => {
        this.currencyList = response;
      },
    });
  }

  getCurrency(id: number) {
    this.currencyService.getCurrency(id).subscribe({
      next: (response) => {
        this.Currency = response;
      },
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.currencyForm.reset();
    this.onClose();
  }
}
