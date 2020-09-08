import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '0fc2778958bb4fc3820fbb04013d982c';

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${this.API_KEY}`);
  }

  public searchNews(param: string) {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=de&q=${param}&apiKey=${this.API_KEY}`);
  }

  constructor(private httpClient: HttpClient) { }
}
