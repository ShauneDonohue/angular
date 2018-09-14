import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../state';

import { AckPositionAction, getCurrentPositions, getNewPositions } from '../../positions.state';

@Component({
  selector: 'position-list',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
  curPositions: Observable<string[]>;
  newPositions: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.curPositions = store.select(getCurrentPositions);
    this.newPositions = store.select(getNewPositions);
  }

  ackPos(position: string) {
    this.store.dispatch(new AckPositionAction(position));
  }
}
