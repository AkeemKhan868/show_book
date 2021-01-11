import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  
  getBook(){
    return [
      {
        img: 'assets/images/halo.jpg',
        title: 'Halo',
        author: 'Eric Nylund',
        description: 'The eponymous Halo Array are a group of immense, habitable, ring-shaped superweapons that were created by the Forerunners to destroy the Flood, but which the Covenant mistake for religious artifacts that, if activated, would transport them on a Great Journey to meet the Forerunners.'
      },
      {
        img: 'assets/images/got.jpg',
        title: 'Game of Thrones',
        author: 'George R. R. Martin',
        description: 'Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin. ... In the novel, recounting events from various points of view, Martin introduces the plot-lines of the noble houses of Westeros, the Wall, and the Targaryens.'
      },
      {
        img: 'assets/images/hobbit.jpg',
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        description: 'The Hobbit is set within Tolkien\'s fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo\'s journey takes him from light-hearted, rural surroundings into more sinister territory.'
      }
    ];
  }
}
