import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core'
import { NewsService } from '../domain/news.service';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  //providers:[NewsService],
})
export class SearchComponent implements OnInit {
  results: Array<string>=[];
  @ViewChild("layout") layout: ElementRef;
  constructor(public news: NewsService) {
    // Use the component constructor to inject providers.
  };

  ngOnInit(): void {
    // Init your component properties here.
    this.news.add("Data 1");
    this.news.add("Data 2");
    this.news.add("Data 3");
  };

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  };

  onItemTap(args:any){
    console.dir(args)
  };

  onPull(e:any) {
    console.log(e);
    const pullRefresh = e.object;
    setTimeout(() => {
      this.results.push("xxxxxxx");
      pullRefresh.refreshing = false;
    }, 2000);
  };

  searchNow(s: string){
    this.results = this.news.search().filter((x)=> x.indexOf(s) >= 0);
    const layout = <View>this.layout.nativeElement;
    layout.animate({
      backgroundColor: new Color('blue'),
      duration: 3000,
      delay: 1500,
    }).then(()=> layout.animate({
      backgroundColor: new Color('white'),
      duration: 3000,
      delay: 1500,
    }));
  };
};
