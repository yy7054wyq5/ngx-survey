import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AskType,
  SurveyPaperItem,
  SurveyService,
} from '../../../core/survey.service';
import { map } from 'rxjs/operators';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { words } from 'lodash';

const Words = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
];

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
})
export class AddComponent implements OnInit {
  constructor(public surveyService: SurveyService, private fb: FormBuilder) {
    this.classifyList$ = this.surveyService
      .getClassify({})
      .pipe(map((res) => res.data));
  }

  AskType = AskType;
  classifyList$: Observable<Array<any>>;
  Words = Words;
  // [
  //   {
  //     title: '这是单选题',
  //     type: AskType.Radio,
  //     isRequired: true,
  //     options: [
  //       {
  //         label: '选项 1',
  //         value: 'A',
  //       },
  //       {
  //         label: '选项 2',
  //         value: 'B',
  //       },
  //     ],
  //   },
  //   {
  //     title: '这是多选题',
  //     type: AskType.Checkbox,
  //     isRequired: true,
  //     options: [
  //       {
  //         label: '选项 1',
  //         value: 'A',
  //       },
  //       {
  //         label: '选项 2',
  //         value: 'B',
  //       },
  //     ],
  //   },
  //   {
  //     title: '这是简答题',
  //     type: AskType.TextArea,
  //     isRequired: false,
  //   },
  // ];

  form = this.fb.group({
    classify: ['', [Validators.required]],
    title: ['', [Validators.required]],
    submit_start: [null, [Validators.required]],
    submit_end: [null, [Validators.required]],
    schema: new FormArray([this.createAsk()]),
  });

  get schema(): FormArray {
    return this.form.get('schema') as FormArray;
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  save(): void {
    const v = this.form.getRawValue();
    console.log(v);
  }

  outgiving(): void {}

  optionChange(value: string): void {}

  /**
   * schema 元素
   */
  schemaItem(index: number): FormGroup {
    return this.schema.get(index.toString()) as FormGroup;
  }

  /** 选项 formArray */
  optionsInSchemaItem(pindex: number): FormArray {
    const res = this.schemaItem(pindex).get('options') as FormArray;
    return res;
  }

  /**
   * 增删选项
   */
  changeAskAnswerOptions(
    ctl: FormArray,
    index: number,
    remove?: boolean
  ): void {
    const options = ctl.value as Array<any>;
    console.log(options);
    // 删除
    if (remove) {
      if (options.length === 1) {
        return;
      }
      ctl.removeAt(index);
      return;
    }
    // 添加
    if (options.length === this.Words.length) {
      return;
    }
    ctl.insert(index + 1, this.createOptionFormGroup(index + 1, ''));
  }

  /** 增删问题 */
  changeAsk(index: number, remove?: boolean): void {
    if (remove) {
      this.schema.removeAt(index);
      return;
    }
    this.schema.insert(index + 1, this.createAsk());
  }

  private createOptionFormGroup(index: number, v: string): FormGroup {
    return new FormGroup({
      [index]: new FormControl(v),
    });
  }

  private createAsk(option?: SurveyPaperItem): FormGroup {
    const { title, type, isRequired, options } = option || {
      title: '',
      type: AskType.Radio,
      isRequired: true,
      options: [''],
    };
    return this.fb.group({
      title: new FormControl(title, [Validators.required]),
      type: new FormControl(type, [Validators.required]),
      isRequired: new FormControl(isRequired),
      // formArray 里是 formGroup
      options: new FormArray(
        options.map((op: string, i: number) => {
          return this.createOptionFormGroup(i, op);
        })
      ),
    });
  }
}
