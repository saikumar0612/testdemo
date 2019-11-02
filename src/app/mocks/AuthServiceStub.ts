import { of } from 'rxjs';
export class AuthServiceStub {
login(){
    return of({
        json:function(){
            return {id: 1, username: "admin", firstName: "saikumar", lastName: "barla", token: "fake-jwt-token"}
        }
    })
}
}