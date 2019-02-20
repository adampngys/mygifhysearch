import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule,
  MatFormFieldModule, MatListModule, MatCardModule
} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

const MODULES = [
  FlexLayoutModule,
  MatToolbarModule, MatButtonModule,
  MatInputModule, MatFormFieldModule,
  MatIconModule, MatListModule, MatCardModule,
  NgxPaginationModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
