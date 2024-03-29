import { Injectable } from '@angular/core';
import {
  filter,
  Observable,
  fromEvent,
  debounceTime
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  end_of_scroll$: Observable<Event>;

  constructor() {
    this.end_of_scroll$ = fromEvent(window, "scroll").
    pipe(
      debounceTime(300),
      filter(is_end_of_scroll),
    );
  }
}

let is_end_of_scroll = (event: Event): boolean => {
  let root_element: Element = document.documentElement;
  const scroll_top = root_element.scrollTop;
  const client_height = root_element.clientHeight;
  const scroll_height = root_element.scrollHeight;

  const end_of_scroll_offset = 20;

  if ((scroll_top + client_height) >= scroll_height - end_of_scroll_offset) {
    return true;
  }
  return false;
}
