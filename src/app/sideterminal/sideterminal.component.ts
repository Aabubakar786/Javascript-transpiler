import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared.service';

@Component({
  selector: 'app-sideterminal',
  templateUrl: './sideterminal.component.html',
  styleUrls: ['./sideterminal.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SideterminalComponent implements OnInit {
  texts: string[] = ['', '', '', ''];
  // codeArray = [
  //   "let num1 = 5;\nlet num2 = 3;\nconsole.log(num1 + num2);",
  //   "let num1 = 5;\nlet num2 = 3;\nconsole.log(num1 + num2);",
  //   "function greet(name) {\n  console.log(`Hello, ${name}`);\n}\ngreet(\"Alice\");",
  //   "const isAdmin = true;\nif (isAdmin) {\n  console.log(\"You are an admin!\");\n} else {\n  console.log(\"You are not an admin!\");\n}"
  // ];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.displayText.subscribe((texts) => {
      this.texts = texts;
  
      let index = 0;
      const executeNextCode = () => {
        if (index < this.texts.length) {
          const code = this.texts[index];
          try {
            const executeCode = new Function(code);  //Eval or function here
            executeCode(); 
            index++;
            setTimeout(() => {
              executeNextCode();
            }, 2000); 
          } catch (error) {
            console.error('Error executing code:', error);
            index++;
            setTimeout(() => {
              executeNextCode();
            }, 2000); 
          }
        }
      };
  
      executeNextCode();
    });
  }
}