import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    nombre: ['RTX 4080ri'],
    precio: [1500],
    existencias: [5],
  });

  constructor(private fb: FormBuilder) { }
}
