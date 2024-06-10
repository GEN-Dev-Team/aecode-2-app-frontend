import { Component, OnInit } from '@angular/core';
import { IPlan } from '../../../models/plan';
import { PlanService } from '../../../core/services/plan.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { ModelComponent } from '../../../components/model/model.component';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { PlanFormComponent } from './plan-form/plan-form.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [
    ButtonComponent,
    ModelComponent,
    SvgEditComponent,
    SgvTrashComponent,
    PlanFormComponent,
  ],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent implements OnInit {
  isModelOpen = false;
  planList: IPlan[] = [];
  plan!: IPlan;

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllPlans();
  }

  loadPlan(planData: IPlan) {
    this.plan = planData;
    this.openModel();
  }

  getAllPlans() {
    this.planService.getAllPlans().subscribe((response) => {
      this.planList = response;
      console.log(response);
    });
  }

  deletePlan(id: number) {
    this.planService.deletePlan(id).subscribe((response) => {
      console.log('Plan deleted successfully!');
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllPlans();
  }
}
