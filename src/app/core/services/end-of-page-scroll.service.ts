import { Injectable } from '@angular/core';
import {
  filter,
  Observable,
  fromEvent,
  throttleTime
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndOfPageScrollService {
  end_of_page_scroll$: Observable<Event>;

  constructor() {
    this.end_of_page_scroll$ = fromEvent(window, "scroll").
    pipe(
      filter(is_end_of_scroll),
      throttleTime(1000)
    );
  }
}

let is_end_of_scroll = (_: Event): boolean => {
  let root_element: Element = document.documentElement;
  const scroll_top = root_element.scrollTop;
  const client_height = root_element.clientHeight;
  const scroll_height = root_element.scrollHeight;

  const bottom_margin = 10;

  if ((scroll_top + client_height) >= scroll_height - bottom_margin) {
    return true;
  }
  return false;
}
