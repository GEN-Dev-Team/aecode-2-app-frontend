import { Component, Input } from '@angular/core';
import { SvgCopyComponent } from '../../icons/svg-copy/svg-copy.component';
import { SvgDownloadComponent } from '../../icons/svg-download/svg-download.component';
import { IScript } from '../../../models/script';

@Component({
  selector: 'app-script-content',
  standalone: true,
  imports: [SvgCopyComponent, SvgDownloadComponent],
  templateUrl: './script-content.component.html',
  styleUrl: './script-content.component.css',
})
export class ScriptContentComponent {
  @Input() script!: IScript;
  @Input() scriptContent!: File;

  fileContent: string | ArrayBuffer | null = null;

  downloadScript() {
    window.open(this.script.script_file, '_blank');
  }
}
