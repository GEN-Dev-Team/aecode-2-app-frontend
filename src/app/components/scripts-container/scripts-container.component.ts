import { Component } from '@angular/core';
import { ScriptBoxComponent } from './script-box/script-box.component';
import { ScriptContainerComponent } from '../../pages/script-view/script-container/script-container.component';

@Component({
  selector: 'app-scripts-container',
  standalone: true,
  imports: [ScriptContainerComponent],
  templateUrl: './scripts-container.component.html',
  styleUrl: './scripts-container.component.css',
})
export class ScriptsContainerComponent {}
