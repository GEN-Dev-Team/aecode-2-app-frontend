import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgDirectoryOpenComponent } from '../svg-directory-open/svg-directory-open.component';
import { SvgDirectoryClosedComponent } from '../svg-directory-closed/svg-directory-closed.component';
import { SvgCaretDownComponent } from '../../../icons/svg-caret-down/svg-caret-down.component';
import { SvgCaretRightComponent } from '../svg-caret-right/svg-caret-right.component';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [
    SvgDirectoryOpenComponent,
    SvgDirectoryClosedComponent,
    SvgCaretDownComponent,
    SvgCaretRightComponent,
  ],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css',
})
export class TreeNodeComponent {
  @Input() node: any; // Puede ser un archivo o un directorio
  @Input() nodeName: string = '';
  @Output() scriptContent = new EventEmitter<File>();

  fileContent: string | ArrayBuffer | null = null;

  expanded = false;

  isDirectory(node: any): boolean {
    return typeof node === 'object' && !(node instanceof File);
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Manejador para clic en archivos
  onFileClick(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      this.fileContent = reader.result as string;
      this.scriptContent.emit(file);
      console.log('Tree node component', file);
    };

    reader.readAsText(file as Blob);
  }
}
