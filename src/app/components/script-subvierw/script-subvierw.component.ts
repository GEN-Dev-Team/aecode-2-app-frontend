import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ScriptContentComponent } from './script-content/script-content.component';
import { ScriptDetailsComponent } from './script-details/script-details.component';
import { ScriptFileTreeComponent } from './script-file-tree/script-file-tree.component';
import { ScriptHeaderComponent } from './script-header/script-header.component';
import { ScriptService } from '../../core/services/script.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IScript } from '../../models/script';

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
export class ScriptSubvierwComponent implements AfterViewInit {
  script!: any;
  Script!: IScript;
  scriptContent!: any;
  constructor(
    private scriptService: ScriptService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe((data: Params) => {
      this.scriptService.getScript(data['id_script']).subscribe((response) => {
        this.script = response;
        this.Script = this.script[0];
      });
    });
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

  getScriptContent(scriptContent: any) {
    this.scriptContent = scriptContent;
    console.log('ScriptContent:', this.scriptContent);
  }
}
