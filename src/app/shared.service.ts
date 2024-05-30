import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private textSource = new BehaviorSubject<string[]>(['', '', '', '']);
  private displayTextSource = new BehaviorSubject<string[]>(['', '', '', '']);
  currentText = this.textSource.asObservable();
  displayText = this.displayTextSource.asObservable();

  updateText(index: number, newText: string) {
    const currentTexts = this.textSource.getValue();
    currentTexts[index] = newText;
    this.textSource.next(currentTexts);
  }

  displayCurrentText() {
    this.displayTextSource.next(this.textSource.getValue());
  }

  clearText() {
    this.textSource.next(['', '', '', '']);
  }
}
