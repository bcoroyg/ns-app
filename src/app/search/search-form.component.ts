import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'SearchForm',
  template: `
    <TextField #texto="ngModel" [(ngModel)]="textFieldValue"  hint="Ingresar Texto ..." required minlen="4"></TextField>
    <Label *ngIf="texto.hasError('required')" text="El campo es obligatorio" class="text-center text-danger"></Label>
    <Label *ngIf="!texto.hasError('required') && texto.hasError('minlen')" text="Ingresar minimo 4 letras." class="text-center text-danger"></Label>
    <Button *ngIf="texto.valid" text="Buscar" (tap)="onButtonTap()"></Button>
  `
  /* template: `
  <SearchBar #texto="ngModel" hint="Ingresar Texto ..." [(ngModel)]="textFieldValue" (submit)="onButtonTap()" required></SearchBar>
  <Label *ngIf="texto.hasError('required')" text="El campo es obligatorio" class="text-center text-danger"></Label>
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
  }
}
