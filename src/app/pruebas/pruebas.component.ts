import { Component, OnInit } from '@angular/core';
import { UserArr, MockService } from '../services/mock.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor( public ms: MockService ){ }


  ngOnInit(): void {
    this.ms.getUser().subscribe(res => { this.users = [...res]; })
  }

  users: UserArr[] = [];
  registerAct:boolean= false;
  recordAct:boolean= false;
  id: string | undefined;


  register(){
    this.registerAct = true;
    this.recordAct = false;
  }

  record(){
    this.recordAct = true;
    this.registerAct = false;
  }


  body = { name : '',lastName: '',email: '',phone: '',city: '',country: ''}

  addNewUser(){
    this.ms.addNewUser(this.body).subscribe(res => {
      this.users.push(res)
    })
    this.body = { name : "",lastName: "",email: "",phone: "",city: "",country: ""}
  }


}
