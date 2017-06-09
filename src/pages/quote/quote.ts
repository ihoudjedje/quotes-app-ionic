import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../data/quotes.interface";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage{
  quote: Quote;
  constructor(private viewController: ViewController, private navParams: NavParams, private quoteService: QuoteService) {
    this.quote = this.navParams.data;
  }


  onCloseModal(justClose: boolean){
    this.viewController.dismiss(justClose);
  }


  onUnfavorite(quote: Quote, justClose: boolean){
    this.viewController.dismiss(justClose);
  }
}
