import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Router } from '@angular/router'; // para el onAgregar

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService,
    private router: Router //sirve para el navigate en onAgregar
    ) { }

  clientes: Cliente[];

  ngOnInit(): void {
    this.clienteService.getCliente().subscribe(
      res => {
        this.clientes = res;
      }
    );
  }
 // this.router.navigate(['clientes/add']);
  // para mostrar el formulario de agregar clientes
  onAgregar(){

    this.router.navigate(['clientes/add']);
  }

}
