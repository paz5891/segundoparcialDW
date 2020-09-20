import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ngOnGuardar(): void {
    this.router.navigate(['clientes']);
  }
  ngOnEliminar(): void {
    this.router.navigate(['clientes']);
  }
  ngOnCancelar(): void {
    this.router.navigate(['clientes']);
  }
}
