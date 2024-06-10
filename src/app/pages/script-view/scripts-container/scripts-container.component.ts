import { Component } from '@angular/core';
import { ScriptContainerComponent } from './script-container/script-container.component';
import { ScriptService } from '../../../core/services/script.service';
import { IScript } from '../../../models/script';

@Component({
  selector: 'app-scripts-container',
  standalone: true,
  imports: [ScriptContainerComponent],
  templateUrl: './scripts-container.component.html',
  styleUrl: './scripts-container.component.css',
})
export class ScriptsContainerComponent {
  scriptList: IScript[] = [];

  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.getScripts();
  }

  getScripts() {
    this.scriptService.getAllScripts().subscribe({
      next: (response) => {
        const baseUrl = 'https://aecode.onrender.com';

        response.forEach((item) => {
          // Concatenar baseUrl a script_file
          item.script_file = `${baseUrl}${item.script_file}`;

          // Concatenar baseUrl a cada elemento en script_multimedia
          item.script_multimedia = item.script_multimedia.map(
            (multimediaItem) => `${baseUrl}${multimediaItem}`
          );
        });

        this.scriptList = response;
        console.log('Server response: ', response);
        console.log('Scriptlist:', this.scriptList);
      },
      error: (err) => {
        console.error('Error fetching scripts:', err);
      },
    });
  }

  getScript(id: number) {
    this.scriptService.getScript(id).subscribe({
      next: (response) => {
        // this.Role = response;
      },
    });
  }
}
