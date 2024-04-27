import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  test: FormGroup;
  
  constructor(private FormBuilder: FormBuilder) {
    
      this.test = this.FormBuilder.group({
        tiempoSesion: ['', Validators.required, Validators.maxLength(2)],
        nivelEducativo: ['',[Validators.required]],
        regiones: [''],
        edadPaciente: ['', [Validators.required, Validators.maxLength(2)]],
      });
  }

  
 enviar(){
    console.log(this.test.value)
  }
  
}
