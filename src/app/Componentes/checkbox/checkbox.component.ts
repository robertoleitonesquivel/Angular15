import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  frm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {

    this.frm = this.fb.group({
      Active: [false],
      Value: ['']
    });
  }

  public click(): void {

    let x: boolean = this.frm.controls['Active'].value ? false : true;

    this.frm.controls['Active'].setValue(x);

  }

}
