import { createAction, props } from "@ngrx/store";
import { News } from "./news.reducer";
// ACCIONES
export enum NewsActionTypes {
  INIT_MY_DATA = "[Noticias] Init My Data",
  NUEVA_NOTICIA = "[Noticias] Nueva",
  SUGERIR_NOTICIA = "[Noticias] Sugerir"
}

export const LoadDataAction = createAction (
  NewsActionTypes.INIT_MY_DATA,
  props<{news: News[]}>()
);

export const NuevaNoticiaAction = createAction (
  NewsActionTypes.NUEVA_NOTICIA,
  props<{news: News}>()
);

export const SugerirAction = createAction (
  NewsActionTypes.SUGERIR_NOTICIA,
  props<{news: News}>()
);
