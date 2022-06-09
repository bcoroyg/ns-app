import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'SearchForm',
  /* template: `
    <TextField [(ngModel)]="textFieldValue"  hint="Ingresar Texto ..."></TextField>
    <Button text="Buscar" (tap)="onButtonTap()"></Button>
  ` */
  template: `
  <SearchBar hint="Ingresar Texto ..." [(ngModel)]="textFieldValue" (submit)="onButtonTap()"></SearchBar>
  `
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
  }
}
