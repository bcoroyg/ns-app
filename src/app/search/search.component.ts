import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core'
import { NewsService } from '../domain/news.service';
import { ToastDuration, Toasty } from '@triniwiz/nativescript-toasty';
import * as newsActions from '../store/news/news.action'
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  //providers:[NewsService],
})
export class SearchComponent implements OnInit {
  results: Array<string>=[];
  @ViewChild("layout") layout: ElementRef;
  constructor(public news: NewsService, private store: Store<AppState>) {
    // Use the component constructor to inject providers.
    this.store.select((state) => state.news.suggested)
      .subscribe((data) => {
        const f = data;
        if (f != null) {
          const toasty = new Toasty({
            text: 'Sugerimos leer: ' + f.title,
            duration: ToastDuration.SHORT
          });
          toasty.show();
        }
      });
  };

  ngOnInit(): void {
    // Init your component properties here.
  };

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  };

  onItemTap(args:any){
    this.store.dispatch(newsActions.NuevaNoticiaAction({news:args.view.bindingContext}))
    console.dir("ON ITEM",args.view.bindingContext)
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
    //this.results = this.news.search().filter((x)=> x.indexOf(s) >= 0);
    this.news.search(s).then((result: any) => {
      console.log('resultados buscarAhora: ' + JSON.stringify(result));
      this.results = result
    }, (e) => {
      const toasty = new Toasty({
        text: 'Error en la busqueda...',
        duration: ToastDuration.SHORT
      });
      toasty.show();
    });
    /* const layout = <View>this.layout.nativeElement;
    layout.animate({
      backgroundColor: new Color('blue'),
      duration: 3000,
      delay: 1500,
    }).then(()=> layout.animate({
      backgroundColor: new Color('white'),
      duration: 3000,
      delay: 1500,
    })); */
  };
};
