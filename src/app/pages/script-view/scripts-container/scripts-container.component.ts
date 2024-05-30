import { Component } from '@angular/core';
import { ScriptContainerComponent } from './script-container/script-container.component';

@Component({
  selector: 'app-scripts-container',
  standalone: true,
  imports: [ScriptContainerComponent],
  templateUrl: './scripts-container.component.html',
  styleUrl: './scripts-container.component.css',
})
export class ScriptsContainerComponent {}
