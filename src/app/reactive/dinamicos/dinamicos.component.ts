import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit { 

  a: number = 0;

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Dragon Ball z', Validators.required],
      ['Naruto', Validators.required],
    ], Validators.required)
  });

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if (this.miFormulario.invalid){
      this.miFormulario.controls['nombre'].markAsTouched();
      console.log('Formulario Invalido')
      return;
    }

    console.log(this.miFormulario.value);
  }

}
