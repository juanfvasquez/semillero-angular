import { Component, OnInit } from '@angular/core';
import {PostService} from '../../shared/services/post.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  constructor(
    private servicioPosts: PostService,
    private servicioAuth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.usuario;
    this.servicioAuth.login(email, password).then(user => {
      setTimeout(() => {
        this.consultarPosts();
      }, 2000);
    }).catch(error => {
      console.log(error);
    });
  }

  consultarPosts() {
    this.servicioPosts.consultarPosts().subscribe(respuesta => {
      console.log(respuesta);
    });
  }
}
