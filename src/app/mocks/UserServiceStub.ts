import { of } from 'rxjs';
import { environment } from '../../environments/environment';
export class UserServiceStub {


   register(){
       return of({
           json:function(){
               return {firstName: "admin", lastName: "admin", username: "admin", password: "Pass12!@", id: 1}
           }
       })
   }

   getAll(){
       return of({
           json:function(){
               return [{
                    firstName: "Sharmistha",
                    id: 1,
                    lastName: "Biswas",
                    password: "Pass12!@",
                    username: "sharmistha"
               }]
           }
       })
   }

   delete(id){
       return of({
           json:function(){
               return [{
                    firstName: "Sharmistha",
                    id: 1,
                    lastName: "Biswas",
                    password: "Pass12!@",
                    username: "sharmistha"
               }]
           }
       })
   }
}