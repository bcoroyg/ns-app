import { ActionReducerMap } from '@ngrx/store';
import * as newsReducer from './news/news.reducer';

export interface AppState {
  news: newsReducer.NewsState;
}

export const reducers: ActionReducerMap<AppState> = {
  news: newsReducer.reducerNews
};

export const reducersInitialState = {
  news: newsReducer.intializeNewsState
};
