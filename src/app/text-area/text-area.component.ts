import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared.service';
// import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TextAreaComponent implements OnInit {
  texts: string[] = ['', '', '', ''];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.currentText.subscribe((texts) => {
      this.texts = texts;
    });
  }

  onTextChange(index: number, event: Event) {
    const newText = (event.target as HTMLTextAreaElement).value;
    this.sharedDataService.updateText(index, newText);
  }
}
