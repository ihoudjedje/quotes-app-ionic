import {Quote} from "../data/quotes.interface";
export class QuoteService{
  favoritedQuotes: Quote[] = [];

  addQuoteToFavorite(quote: Quote){
    this.favoritedQuotes.push(quote);
  }

  removeQuoteFromFavorite(quote: Quote){
    const position = this.favoritedQuotes.findIndex((quoteElement: Quote) => {
      return quote.id == quoteElement.id;
    });
    this.favoritedQuotes.splice(position, 1);
  }

  returnFavoriteQuotesArray(){
    return this.favoritedQuotes.slice();
  }

  checkIfFavorate(quote: Quote){
    return this.favoritedQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}

