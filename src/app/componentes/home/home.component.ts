import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getCurrentUser();
  }


  getCurrentUser()
  {

      const data = localStorage.getItem('usuario');  

      if(!data)
      {
      
     //     let userId=firebase.auth().currentUser.uid;
     //               
     //       this.clienteService.obtenerUser(userId).subscribe(emp=>{

     //         if(emp.length!=0)
     //         {   
     //           localStorage.setItem('usuario',JSON.stringify(emp[0]))
     //         }else{
     //         }         

     //       });   
     }

     
  }

}