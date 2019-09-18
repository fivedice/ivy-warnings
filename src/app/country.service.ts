import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

@Injectable({
	providedIn: 'root'
})
export class CountryService {
	constructor(private http: HttpClient) {}

	getCountriesByName(name: string) {
		return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${name}`);
	}
}
