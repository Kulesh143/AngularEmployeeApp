import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  SearchCountryField,
  // TooltipLabel,
  CountryISO
} from "ngx-intl-tel-input";


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Qatar];
  phoneForm = new FormGroup({
    phone: new FormControl("", [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
    this.phoneForm.patchValue({
      number: "+97431422391",
      internationalNumber: "+974 3142 2391",
      nationalNumber: "3142 2391",
      countryCode: "QA",
      dialCode: "+974"
    });
  }

}
