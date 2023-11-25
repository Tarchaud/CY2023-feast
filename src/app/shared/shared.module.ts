import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsPipe } from './pipes/events.pipe';


@NgModule({
  declarations: [
    EventsPipe
  ],
  exports: [
    FormsModule,
    EventsPipe,
    HttpClientModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
