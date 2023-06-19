// import { Component } from '@angular/core';
// import { User } from 'src/assets/data/userInterface';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   users: User[] = [];

//   public loginUsername: string = '';
//   public loginPassword: string = '';


//   public registerUsername: string = '';
//   public registerPassword: string = '';



//   login() {
//     // Busca si existe un usuario con las credenciales ingresadas
//     const user = this.users.find(u => u.username === this.loginUsername && u.password === this.loginPassword);
//     if (user) {
//       this.loginSuccess = true;
//     } else {
//       this.invalidCredentials = true;
//     }
//   }

//   register() {
//     // Verifica si el usuario ya está registrado
//     const existingUser = this.users.find(u => u.username === this.registerUsername);
//     if (existingUser) {
//       this.userAlreadyRegistered = true;
//     } else {
//       const newUser = { username: this.registerUsername, password: this.registerPassword };
//       this.users.push(newUser);
//       this.registrationSuccess = true;
//       console.log(this.users);
//     }
//   }

//   closeAlerts() {
//     this.loginSuccess = false;
//     this.invalidCredentials = false;
//     this.userAlreadyRegistered = false;
//     this.registrationSuccess = false;
//   }

// }
import { Component } from '@angular/core';
import { User } from 'src/assets/data/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  users: User[] = [];

  public loginUsername: string = '';
  public loginPassword: string = '';

  public registerUsername: string = '';
  public registerPassword: string = '';

  login() {
    // Busca si existe un usuario con las credenciales ingresadas
    const user = this.users.find(u => u.username === this.loginUsername && u.password === this.loginPassword);
    if (user) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales inválidas');
    }
  }

  register() {
    // Verifica si el usuario ya está registrado
    const existingUser = this.users.find(u => u.username === this.registerUsername);
    if (existingUser) {
      console.log('El usuario ya está registrado');
    } else {
      const newUser = { username: this.registerUsername, password: this.registerPassword };
      this.users.push(newUser);
      console.log('Registro exitoso');
      console.log('Último usuario registrado:', newUser);
    }
  }

}
