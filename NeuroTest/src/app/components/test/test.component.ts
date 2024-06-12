import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent{

  test: FormGroup;
  tests: any[] = [];
  hasSend: boolean = false;
  errorMsg: string = "";
  isFormValid: boolean = true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.test = this.formBuilder.group({
      tiempoSesion: ['', [Validators.required, Validators.maxLength(2)]],
      nivelEducativo: ['', Validators.required],
      edadPaciente: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }


  enviar() {
   if(this.test.valid){
    this.isFormValid = true;
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.test.value);
    
    this.http.post<any>('http://localhost/tfg-fp/manejoDatos.php', body, { 'headers': headers })
      .subscribe(response => {
        if(response.errors){
          this.errorMsg = response.errors;   
        }else{
          this.errorMsg = "";
          this.tests = Object.values(response);
        }
        this.hasSend = true; 
      });
  }else{
    this.isFormValid = false;
    this.hasSend = false;
  }
}

}



