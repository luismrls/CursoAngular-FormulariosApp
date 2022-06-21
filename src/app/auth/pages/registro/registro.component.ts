import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { emailPattern, nombreApellidoPatter, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPatter ) ] ],
    email: ['', [Validators.required,  Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidatorService] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password: ['', [Validators.required, Validators.minLength(6) ] ],
    password2: ['', [Validators.required ] ],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  })

  get emailErrorsMsg(): string {
    const errors = this.miFormulario.get('email')?.errors

    if ( errors?.['required'] ) {
      return 'Email es obligatorio'
    } else if (errors?.['pattern']) {
      return 'el email debe tener @ y terminar en .com'
    } else if (errors?.['emailUsuado']) {
      return `el email ${ this.miFormulario.get('email')?.value } ya fue registrado`
    }

    return '';
  }

  constructor( private formBuilder: FormBuilder, 
               private validatorService: ValidatorService,
               private emailValidatorService: EmailValidatorService  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: "Luis Morales",
      email: 'test1@test.com',
      username: 'test_user',
      password: '123456',
      password2: '123456'
    });
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log( this.miFormulario.value )

    this.miFormulario.markAllAsTouched()
  }

}
