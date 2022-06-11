import * as newsState from './news/news.reducer';
import * as newsStateAction from './news/news.action';
//var newsState = require("~/app/domain/noticias-state.model");

describe("reducersNoticias", function () {
    it("should reduce init data", function () {
        // setup
        const prevState = newsState.intializeNewsState;
        const action = newsStateAction.LoadDataAction({news:[{title:"noticia 1"}, {title:"noticia 2"}]});
        // action
        const newState = newsState.reducerNews(prevState, action);
        // assertions
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].title).toEqual("noticia 1");
    });
    it("should reduce new item added", function () {
        const prevState = newsState.intializeNewsState;
        const action = newsStateAction.NuevaNoticiaAction({news:new newsState.News("noticia 3")});
        const newState = newsState.reducerNews(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].title).toEqual("noticia 3");
    });
    it("should reduce new item added v2", function () {
      const prevState = newsState.intializeNewsState;
      const action = newsStateAction.NuevaNoticiaAction({news:new newsState.News("noticia 3")});
      const newState = newsState.reducerNews(prevState, action);
      expect(newState.items.length).toEqual(1);
      expect(newState.items[0].title).toEqual("noticia 3");
  });
});
