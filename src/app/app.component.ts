import { Component } from '@angular/core';
import { CountryService } from './country.service';
import { Subject, Observable } from 'rxjs';
import { Country } from './country';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	countries$: Observable<Country[]>;
	constructor(private countriesService: CountryService) {
		this.countries$ = this.countriesService.getCountriesByName('united');
	}
}
