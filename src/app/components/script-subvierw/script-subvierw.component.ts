import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptContentComponent } from './script-content/script-content.component';
import { ScriptDetailsComponent } from './script-details/script-details.component';
import { ScriptFileTreeComponent } from './script-file-tree/script-file-tree.component';
import { ScriptHeaderComponent } from './script-header/script-header.component';

@Component({
  selector: 'app-script-subvierw',
  standalone: true,
  imports: [
    ScriptHeaderComponent,
    ScriptContentComponent,
    ScriptDetailsComponent,
    ScriptFileTreeComponent,
  ],
  templateUrl: './script-subvierw.component.html',
  styleUrl: './script-subvierw.component.css',
})
export class ScriptSubvierwComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit(): void {
    // Ensure Flowbite's animations are initialized
    const flowbiteInit = () => {
      if (typeof (window as any).Flowbite !== 'undefined') {
        (window as any).Flowbite.init();
      }
    };
    flowbiteInit();
  }
}
