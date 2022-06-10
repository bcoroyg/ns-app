import { Action, createReducer, on } from "@ngrx/store";
import * as newsActions from './news.action'
// ESTADO

export class News{
  constructor(public title:string){}
}

export interface NewsState {
  items: News[];
  loading: boolean;
  suggested: News;
}

export const intializeNewsState: NewsState = {
  items: [],
  loading: false,
  suggested: null as any
}

const reducer = createReducer(
  intializeNewsState,
  on(newsActions.LoadDataAction, (state, {news})=> {
    return {
        ...state,
        loading: true,
        items: news
    };
  }),
  on(newsActions.NuevaNoticiaAction,(state, {news})=> {
    return {
      ...state,
      loading: true,
      items: [...state.items, news]
    };
  }),
  on(newsActions.SugerirAction, (state, {news})=> {
    return {
      ...state,
      loading: true,
      suggested:news,
     };
  }),
);

export function reducerNews(state: NewsState = intializeNewsState, action: Action): NewsState{
  return reducer(state, action)
};
