import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quotes.interface";
import {QuoteService} from "../../services/quote.service";


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  myQuote: {category: string, quotes: Quote[], icon: string};

  constructor(public navParams: NavParams, public alertCtrl: AlertController, public navCtrl: NavController, public quoteService: QuoteService) {
    this.myQuote = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  onFavoriteClicked(quote: Quote){


      let confirm = this.alertCtrl.create({
        title: 'Add to favorites?',
        message: 'Do you really want to add this sh** to fav?',
        buttons: [
          {
            text: 'Disagree',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Agree',
            handler: () => {
              this.quoteService.addQuoteToFavorite(quote);
            }
          }
        ]
      });
      confirm.present();
  }

  onUnFavoriteClicked(quote: Quote){
    this.quoteService.removeQuoteFromFavorite(quote);
  }


  isFavorate(quote: Quote){
    return this.quoteService.checkIfFavorate(quote);
  }
  }

