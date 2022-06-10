import { Injectable } from "@angular/core";
import { getJSON, request } from "@nativescript/core/http";
import sqlite from 'nativescript-sqlite'

@Injectable()
export class NewsService {
  private api: string = "YOUR API"
  private news: Array<string> = [];
  constructor() {
    this.getDB((db) => {
        console.dir(db);
        db.each('select * from logs',
            (err, fila) => console.log('fila: ', fila),
            (err, totales) => console.log('Filas totales: ', totales));
    }, () => console.log('error on getDB'));
  };
  getDB(fnOk:any, fnError:any){
    return new sqlite('mi_db_logs', (err, db) => {
      if (err) {
          console.error('Error al abrir bd!', err);
      } else {
          console.log('Está la db abierta: ', db.isOpen() ? 'Si' : 'No');
          db.execSQL('CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)').
              then((id:any) => {
                  console.log('CREATE TABLE OK');
                  fnOk(db);
              }, (error:any) => {
                  console.log('CREATE TABLE ERROR', error);
                  fnError(error);
              });
      }
    });
  }
  add(s: string) {
    //this.news.push(s);
    return request({
      url: `${this.api}/news`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      content: JSON.stringify({new: s})
    });
  };
  favs(){
    return getJSON(`${this.api}/news`)
  }
  search(s:string) {
    this.getDB((db) => {
      db.execSQL('insert into logs (texto) values (?)', [s],
          (err, id) => console.log('nuevo id: ', id));
  }, () => console.log('error on getDB'));
    return getJSON(`${this.api}/news/search?q=${s}`)
    //return this.news;
  };
};
