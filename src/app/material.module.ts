import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  exports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule {}
