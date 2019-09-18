# IvyWarnings

This project demonstrates how Ivy incorrectly identifies unused interfaces.

currency.ts is never assigned to, but is part of a type that is retrieved from an HTTP call. It is valid, if not directly leveraged.

Here are the warnings generated:

```
WARNING in /Users/jyoutsey/src/fivedice/ivy-warnings/src/app/currency.ts is part of the TypeScript compilation but it's unused.
Add only entry points to the 'files' or 'include' properties in your tsconfig.

WARNING in /Users/jyoutsey/src/fivedice/ivy-warnings/src/environments/environment.prod.ts is part of the TypeScript compilation but it's unused.
Add only entry points to the 'files' or 'include' properties in your tsconfig.
```

### Workarounds:

- Move the interface into the same file as the parent object interface (country.ts).
- Inline the currency interface into the country interface rather than defining a new type.
- Define country.currency as Array\<any>.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
