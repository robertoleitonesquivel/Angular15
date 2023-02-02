import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactives',
  templateUrl: './form-reactives.component.html',
  styleUrls: ['./form-reactives.component.scss']
})
export class FormReactivesComponent implements OnInit {

  frmBuilder!: FormGroup;

  frmUnTypeBuilder!: FormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private fbB: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.frmUnTypeBuilder = this.fb.group({
      Id: [],
      Nombre: []
    });

    this.frmBuilder = this.fbB.group({
      Id: [],
      Nombre: []
    });

    this.frmBuilder.controls['Id'].setValue(1);

    console.log(this.frmBuilder.value.Id);

    this.frmUnTypeBuilder.controls['Nombre'].setValue('');
  }

}

export interface Formulario {
  Id: number;
  Nombre: string;
}
