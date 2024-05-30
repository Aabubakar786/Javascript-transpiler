import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared.service';
// import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {}

  onButtonClick(): void {
    this.sharedDataService.displayCurrentText();
  }
}
