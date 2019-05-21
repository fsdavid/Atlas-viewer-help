import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class MaterialModule { }
