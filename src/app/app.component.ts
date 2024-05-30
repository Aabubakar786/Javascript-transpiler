import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextAreaComponent } from './text-area/text-area.component';
import { ButtonComponent } from './button/button.component';
import { SideterminalComponent } from './sideterminal/sideterminal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TextAreaComponent,ButtonComponent,SideterminalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-task';
}
