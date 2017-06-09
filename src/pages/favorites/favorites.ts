import { Component } from '@angular/core';
import {IonicPage, NavParams, ModalController, ToastController} from 'ionic-angular';
import {Quote} from "../../data/quotes.interface";
import {QuoteService} from "../../services/quote.service";
import {QuotePage} from "../quote/quote";


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favoritedQuotes: Quote[];
  constructor(private toastCtrl: ToastController, public navParams: NavParams, public quoteService: QuoteService, public modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.favoritedQuotes = this.quoteService.returnFavoriteQuotesArray();

  }

  onViewSingleQuote(q : Quote){
    let profileModal = this.modalCtrl.create(QuotePage, q);
    profileModal.present();
    profileModal.onDidDismiss((justClose: boolean) => {
      if(!justClose){
        this.quoteService.removeQuoteFromFavorite(q);
        this.favoritedQuotes = this.quoteService.returnFavoriteQuotesArray();
        let toast = this.toastCtrl.create({
          message: 'Quote was removed successfully',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    });
  }

  onTrashToRemoveFavorite(q: Quote){
    this.quoteService.removeQuoteFromFavorite(q);
    this.favoritedQuotes = this.quoteService.returnFavoriteQuotesArray();

      let toast = this.toastCtrl.create({
        message: 'Quote was removed successfully',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }

/*  setBackground(){
    if(this.settingsPage.checkAltBackground()){
      return 'altLibraryBackground';
    }else{
      return 'libraryBackground';
    }

  }*/
}
