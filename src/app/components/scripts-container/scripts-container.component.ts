import { Component } from '@angular/core';
import { ScriptBoxComponent } from './script-box/script-box.component';

@Component({
  selector: 'app-scripts-container',
  standalone: true,
  imports: [ScriptBoxComponent],
  templateUrl: './scripts-container.component.html',
  styleUrl: './scripts-container.component.css',
})
export class ScriptsContainerComponent {}
