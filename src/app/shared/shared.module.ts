import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntDesignModule } from '../ant-design.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AntDesignModule],
  declarations: []
})
export class SharedModule { }
