import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlan } from '../../../../models/plan';
import { PlanService } from '../../../../core/services/plan.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-plan-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './plan-form.component.html',
  styleUrl: './plan-form.component.css',
})
export class PlanFormComponent {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: IPlan | null = null;
  planList: IPlan[] = [];
  plan!: IPlan;
  planForm: FormGroup;

  constructor(private fb: FormBuilder, private planService: PlanService) {
    this.planForm = this.fb.group({
      id_plan: new FormControl(0, [Validators.required]),
      plan_name: new FormControl('', [Validators.required]),
      plan_description: new FormControl('', [Validators.required]),
      plan_price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getPlans();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.planForm.patchValue({
        id_plan: this.data.id_plan,
        plan_name: this.data.plan_name,
        plan_description: this.data.plan_description,
        plan_price: this.data.plan_price,
      });
    }
  }

  onSubmit() {
    if (this.planForm.valid) {
      if (this.data) {
        this.planService.updatePlan(this.planForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Plan updated successfully!');
          },
        });
      } else {
        this.planService.createPlan(this.planForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Plan created successfully!');
          },
        });
      }
    } else {
      this.planForm.markAllAsTouched();
    }
  }

  getPlans() {
    this.planService.getAllPlans().subscribe({
      next: (response) => {
        this.planList = response;
      },
    });
  }

  getPlan(id: number) {
    this.planService.getPlan(id).subscribe({
      next: (response) => {
        this.plan = response;
      },
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.planForm.reset();
    this.onClose();
  }
}
