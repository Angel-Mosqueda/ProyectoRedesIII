import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  formulario: FormGroup;
  submitted = false;
  file: File;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      select_img: ['', Validators.required]
    });
  }

  fileChange(event) {
    this.file = event.target.files.item(0);
  }

  get f() { return this.formulario.controls; }

  enviarFormulario() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    } else {
    }

  }

}
