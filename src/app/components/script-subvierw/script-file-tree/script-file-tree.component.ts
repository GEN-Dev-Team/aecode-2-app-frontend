import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@Component({
  selector: 'app-script-file-tree',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    TreeNodeComponent,
  ],
  templateUrl: './script-file-tree.component.html',
  styleUrl: './script-file-tree.component.css',
})
export class ScriptFileTreeComponent {
  selectedFiles!: File[]; // Variable to store the selected file
  fileTreeStructure: any = [];
  @Output() scriptContent = new EventEmitter<File>();

  sendScriptContent(scriptContent: File) {
    console.log('Script file tree component', scriptContent);
  }

  onFileScriptChange(event: any) {
    const selectedFilesList = event.target.files; // FileList
    this.selectedFiles = Array.from(selectedFilesList); // Convertir FileList a Array<File>

    // Organizar los archivos en una estructura de árbol
    this.fileTreeStructure = this.organizeFiles(this.selectedFiles);

    // Mostrar la estructura completa del árbol en la consola
    console.log('Estructura de árbol completa:', this.fileTreeStructure);
  }

  // Organiza los archivos en una estructura de carpetas
  organizeFiles(files: File[]): any {
    const fileTree: any = {};

    files.forEach((file) => {
      const path = file.webkitRelativePath.split('/');

      let currentLevel = fileTree;

      path.forEach((part, index) => {
        if (!currentLevel[part]) {
          currentLevel[part] = index === path.length - 1 ? file : {};
        }
        currentLevel = currentLevel[part];
      });
    });

    return fileTree;
  }
}
