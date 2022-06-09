import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { SearchBar } from '@nativescript/core';

@Component({
  selector: 'SearchForm',
  template: `
    <TextField [(ngModel)]="textFieldValue"  hint="Ingresar Texto ..."></TextField>
    <Button text="Buscar" (tap)="onButtonTap()"></Button>
  `
/*   template: `
  <SearchBar hint="Ingresar Texto ..." [text]="textFieldValue" (submit)="onButtonTap($event)"></SearchBar>
  ` */
})
export class SearchFormComponent implements OnInit{
  textFieldValue: string="";

  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() inicial: string;

  ngOnInit(): void {
    // Init your component properties here.
    this.textFieldValue= this.inicial;
  }

  onButtonTap(): void {
    console.log(`Buscando ${this.textFieldValue}`);
    if (this.textFieldValue.length > 2) {
      this.search.emit(this.textFieldValue);
    }
/*     const searchBar = args.object as SearchBar;
    console.log(`Buscando ${searchBar.text}`);
     if (searchBar.text.length > 2) {
      this.search.emit(searchBar.text);
    } */
  }
}
