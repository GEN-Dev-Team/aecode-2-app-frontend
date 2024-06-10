import { Component, OnInit } from '@angular/core';
import { ITag } from '../../../models/tags';
import { TagsService } from '../../../core/services/tags.service';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { ModelComponent } from '../../../components/model/model.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { TagFormComponent } from './tag-form/tag-form.component';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [
    SvgEditComponent,
    SgvTrashComponent,
    ModelComponent,
    ButtonComponent,
    TagFormComponent,
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent implements OnInit {
  isModelOpen = false;
  tagList: ITag[] = [];
  tag!: ITag;

  constructor(private tagService: TagsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTags();
  }

  loadTag(tagData: ITag) {
    this.tag = tagData;
    this.openModel();
  }

  getAllTags() {
    this.tagService.getAllTags().subscribe((response) => {
      this.tagList = response;
      console.log(response);
    });
  }

  deleteTag(id: number) {
    this.tagService.deleteTag(id).subscribe((response) => {
      console.log('Tag deleted successfully!');
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllTags();
  }
}
