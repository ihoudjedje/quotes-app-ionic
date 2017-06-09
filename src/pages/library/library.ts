import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quotes.interface";
import quotes from "../../data/quotes"
import {NavController, NavParams} from "ionic-angular";
import {QuotesPage} from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  quotesCollection: {category: string, quotes: Quote[], icon: string}[];


  ngOnInit(): void {
    this.quotesCollection = quotes;

  }

  onGoToQuotes(q : {category: string, quotes: Quote[], icon: string}){
    this.navCtrl.push(QuotesPage, q);
  }


}
