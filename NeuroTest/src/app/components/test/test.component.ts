import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  test: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.test = this.formBuilder.group({
      tiempoSesion: ['', [Validators.required, Validators.maxLength(2)]],
      nivelEducativo: ['', Validators.required],
      edadPaciente: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  enviar() {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.test.value);
    
    this.http.post('http://localhost/tfg-fp/manejoDatos.php', body, { 'headers': headers })
      .subscribe(response => {
        console.log(response);
      });
  }
}



