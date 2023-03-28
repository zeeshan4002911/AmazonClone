import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StarRatingService {
  constructor() {}

  getStarArray(num: number) {
    const filled_star = new Array(num).fill(0);
    const unFilled_star = new Array(5 - num).fill(0);
    return { filled_star, unFilled_star };
  }
}
