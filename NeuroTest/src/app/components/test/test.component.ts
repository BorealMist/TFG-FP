import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

 test: FormGroup;
  
  constructor(private FormBuilder: FormBuilder, private http: HttpClient) {
    
      this.test = this.FormBuilder.group({
        tiempoSesion: ['', Validators.required, Validators.maxLength(2)],
        nivelEducativo: ['',[Validators.required]],
        regiones: [''],
        edadPaciente: ['', [Validators.required, Validators.maxLength(2)]],
      });
  }
  
  enviar(){
    console.log("hola");
    //let body: any = {};
    //body.tiempoSesion = this.test.value.tiempoSesion;
    const headers = { 
      'content-type': 'application/json'};

    const body=JSON.stringify(this.test.value);
    console.log(body);
    this.http.post('http://localhost/tfg-fp/manejoDatos.php', body,{'headers':headers})
      .subscribe((response)=>{
        console.log(response)
        //if (response.errors) {return errors} else {mostrar tabla con el array}
      }); 
  }
  
  
}


