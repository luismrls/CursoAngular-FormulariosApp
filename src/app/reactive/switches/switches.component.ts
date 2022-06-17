import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {


  miFormulario: FormGroup = this.formBuilder.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminos: [ false, Validators.requiredTrue ],
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset( {...this.persona, terminos: true} );

    this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) => {
      // delete form.terminos;
      console.log(rest);
      this.persona = rest;
    })
    
    
    this.miFormulario.get('terminos')?.valueChanges.subscribe(newValue => {
      console.log(newValue)
    })
  }

  guardar(){
    const formValue =  {...this.miFormulario.value}
    delete formValue.terminos //elimina la propiedad de termino, es propio de js esta forma

    this.persona = formValue;
  }

}
