import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basiccos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080ri', [Validators.required, Validators.minLength(3)]],
    precio: [1500, [Validators.required, Validators.min(0)]],
    existencias: [5, [Validators.required, Validators.minLength(0)]],
  });

  constructor(private fb: FormBuilder) { }
}
