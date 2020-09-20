import { Cliente } from './../../models/cliente';
import { ClienteDataServiceService } from './../../services/cliente-data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private router: Router,
              private service: ClienteDataServiceService,
              private route: ActivatedRoute) { }

  idCliente: number;
  nombreCliente: string;
  direccionCliente: string;
  nitCliente: string;
  idParam: number;

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
      this.idParam = +this.route.snapshot.paramMap.get('id');

      if (this.idParam != null){
        console.log(this.idParam);
        const cliente = this.service.getCliente(this.idParam);
        this.idCliente = cliente.id;
        this.nombreCliente = cliente.nombre;
        this.direccionCliente = cliente.direccion;
        this.nitCliente = cliente.nit;
      }
    }
  }

  ngOnGuardar(): void {
    const cliente = new Cliente(this.idCliente, this.nombreCliente, this.direccionCliente, this.nitCliente);
    if (this.idCliente != null) {
      this.service.updateCliente(this.idCliente, cliente);
    }else{
      this.service.saveCliente(cliente);
    }
    this.router.navigate(['clientes']);
  }

  ngOnEliminar(): void {
    this.router.navigate(['clientes']);
  }
  ngOnCancelar(): void {
    this.router.navigate(['clientes']);
  }
}
