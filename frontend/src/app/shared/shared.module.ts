import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const ZorroModules = [
  NzGridModule,
  NzInputModule,
  NzLayoutModule,
  NzButtonModule,
  NzMenuModule,
  NzFormModule,
  NzDropDownModule,
];

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, CommonModule, ...ZorroModules],
  exports: [ReactiveFormsModule, FormsModule, CommonModule, ...ZorroModules],
  declarations: [],
  providers: [],
})
export class SharedModule {}
