import { QuotesPage } from './../quotes/quotes';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
quoteCollection: {category: string, quotes: Quote[], icon: string};
// quoteCollection: {category: string, quotes: string, icon: string};

quotesPage = QuotesPage;

ngOnInit(){
  this.quoteCollection = quotes;
}

}
