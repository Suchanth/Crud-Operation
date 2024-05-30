import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent, CreateComponent, UpdateComponent],
  imports: [CommonModule, StudentRoutingModule, FormsModule],
})
export class StudentModule {}
