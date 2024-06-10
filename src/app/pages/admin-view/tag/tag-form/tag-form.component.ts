import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITag } from '../../../../models/tags';
import { TagsService } from '../../../../core/services/tags.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-tag-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tag-form.component.html',
  styleUrl: './tag-form.component.css',
})
export class TagFormComponent {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: ITag | null = null;
  tagList: ITag[] = [];
  tag!: ITag;
  tagForm: FormGroup;

  constructor(private fb: FormBuilder, private tagService: TagsService) {
    this.tagForm = this.fb.group({
      id_tag: new FormControl(0, [Validators.required]),
      tag_name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getTags();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.tagForm.patchValue({
        id_tag: this.data.id_tag,
        tag_name: this.data.tag_name,
      });
    }
  }

  onSubmit() {
    if (this.tagForm.valid) {
      if (this.data) {
        this.tagService.updateTag(this.tagForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Tag updated successfully!');
          },
        });
      } else {
        this.tagService.createTag(this.tagForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Tag created successfully!');
          },
        });
      }
    } else {
      this.tagForm.markAllAsTouched();
    }
  }

  getTags() {
    this.tagService.getAllTags().subscribe({
      next: (response) => {
        this.tagList = response;
      },
    });
  }

  getTag(id: number) {
    this.tagService.getTag(id).subscribe({
      next: (response) => {
        this.tag = response;
      },
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.tagForm.reset();
    this.onClose();
  }
}
