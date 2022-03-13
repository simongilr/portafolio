import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvsimongilService {

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];
  perfil: any[] = [];
  status: any[] = [];



  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarBlog();
    this.CargarPerfil();
    this.CargarStatus();
  }

  private CargarPerfil(){
    this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/Perfil.json')
      .subscribe((resp: any[]) => {
        this.perfil = resp;
        console.log(resp);
    });
  }

  private CargarStatus(){
    this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/status.json')
      .subscribe((resp: any[]) => {
        this.status = resp;
        console.log(resp);
    });
  }
  private CargarProfesional(){
    this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

  private CargarEducacion(){
    this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any[]) => {
        this.educacion = resp;
        console.log(resp);
    });
  }

  private CargarTestimonio(){
    this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/Testimonio.json')
      .subscribe((resp: any[]) => {
        this.testimonio = resp;
        console.log(resp);
    });
  }

  private CargarExperiencia(){
    this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any[]) => {
        this.experiencia = resp;
        console.log(resp);
    });
  }

  private CargarBlog(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
      .subscribe((resp: any[]) => {
        this.blog = resp;
        console.log(resp);
    });
  }
}
