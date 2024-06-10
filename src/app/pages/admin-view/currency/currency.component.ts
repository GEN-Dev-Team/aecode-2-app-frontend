import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../../../models/currency';
import { CurrencyService } from '../../../core/services/currency.service';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { ModelComponent } from '../../../components/model/model.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [
    SvgEditComponent,
    SgvTrashComponent,
    ModelComponent,
    CurrencyFormComponent,
    ButtonComponent,
  ],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent implements OnInit {
  isModelOpen = false;
  currencyList: ICurrency[] = [];
  currency!: ICurrency;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCurrencies();
  }

  loadCurrency(currencyData: ICurrency) {
    this.currency = currencyData;
    this.openModel();
  }

  getAllCurrencies() {
    this.currencyService.getAllCurrencies().subscribe((response) => {
      this.currencyList = response;
      console.log(response);
    });
  }

  deleteCurrency(id: number) {
    this.currencyService.deleteCurrency(id).subscribe((response) => {
      console.log('Currency deleted successfully!');
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllCurrencies();
  }
}
