import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, Observable } from "rxjs";
import * as newsActions from './news.action'

@Injectable()
export class NewsEffects{
  constructor(private actions$: Actions) { }
  nuevoAgregado$: Observable<Action> = createEffect( ()=> {
    return this.actions$.pipe(
      ofType(newsActions.NuevaNoticiaAction),
      map(({news}) => newsActions.SugerirAction({news}))
    );
  })
}
