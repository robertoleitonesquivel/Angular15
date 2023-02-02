import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';

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
    console.log(this.frm.value);
    this.frm.controls['Active'].setValue(true);
    console.log(this.frm.value);
  }

}
