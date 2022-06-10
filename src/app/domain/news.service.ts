import { Injectable } from "@angular/core";
import { getJSON, request } from "@nativescript/core/http";

@Injectable()
export class NewsService {
  private api: string = "YOUR_API"
  private news: Array<string> = [];
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
    return getJSON(`${this.api}/news/search?q=${s}`)
    //return this.news;
  };
};
