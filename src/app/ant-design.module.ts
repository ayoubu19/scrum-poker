import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const modules = [
  NzButtonModule,
  NzInputModule,
  NzFormModule,
  NzDropDownModule,
  NzIconModule,
  NzSelectModule,
  NzMessageModule,
  NzModalModule,
  NzCommentModule,
  NzDividerModule,
  NzGridModule,
  NzToolTipModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AntDesignModule {}
