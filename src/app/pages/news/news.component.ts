import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Article, Category } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';
import { FcmService } from '../../services/fcm.service';
import { mergeMap, mergeMapTo } from 'rxjs/operators';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];
  font: string = "";
  categoria: string = "";
  frecuencia: number = 0;
  interval: any;
  minDate: string = "";
  maxDate: string = "";
  token: any;

  ready: boolean = false;
  constructor(private newsService: NewsService,
    private afMessaging: AngularFireMessaging,
    private notificacion: FcmService) {
    this.getToken();
  }

  ngOnInit(): void {
    this.newsService.getAll().subscribe((res: Article[]) => {
      this.articles = res;
      console.log('this.articles', this.articles)
      this.ready = true;
    });
  }
  changeConfiguration(event: any) {
    this.ready = false;
    this.font = event.font;
    console.log('this.font', this.font)
    this.categoria = event.categoria;
    console.log('this.categoria', this.categoria)
    this.frecuencia = event.frecuencia * 1000;
    console.log('this.frecuencia', this.frecuencia)
    this.minDate = event.minDate;
    console.log('this.minDate', this.minDate)
    this.maxDate = event.maxDate;
    console.log('this.maxDate', this.maxDate)



    if ((this.minDate != "" && this.maxDate != "")) {

      this.getArticles(this.categoria, this.minDate, this.maxDate, false).subscribe(res => {
        this.articles = res;
        console.log('this.articles', this.articles)
        this.ready = true;
      });
      this.interval = setInterval(() => {
        this.ready = false;
        this.getArticles(this.categoria, this.minDate, this.maxDate, false).subscribe(res => {
          this.articles = res;
          console.log('this.articles', this.articles)
          this.ready = true;
        });
      }, this.frecuencia);


    }
    else if (this.minDate == "" && this.maxDate == "") {
      this.getArticles(this.categoria, this.minDate, this.maxDate, true).subscribe(res => {
        this.articles = res;
        console.log('this.articles', this.articles)
        this.ready = true;
      });
      this.interval = setInterval(() => {
        this.ready = false;
        this.getArticles(this.categoria, this.minDate, this.maxDate, true).subscribe(res => {
          this.articles = res;
          console.log('this.articles', this.articles)
          this.ready = true;
        });
      }, this.frecuencia);
    }

  }


  getArticles(category: string, dateI?: string, dateF?: string, last?: boolean) {
    if (last) {

      return this.newsService.getTopHeadLineByCategory(category, dateI, dateF, last);
    } else {

      return this.newsService.getTopHeadLineByCategory(category, dateI, dateF);
    }
  }
  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); this.token = token },
        (error) => { console.error(error); },
      );
  }

  getToken() {
    this.afMessaging.getToken.subscribe((res) => {
      console.log('res', res)
      this.token = res;

    })
  }
  deleteToken() {

    this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(this.token)))
      .subscribe(
        (token) => { console.log('Token deleted!'); this.token = null },
      );
  }

}