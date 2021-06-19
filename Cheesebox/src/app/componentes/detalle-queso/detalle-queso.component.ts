import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-queso',
  templateUrl: './detalle-queso.component.html',
  styleUrls: ['./detalle-queso.component.css'],
})
export class DetalleQuesoComponent implements OnInit {
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    const producto = await this.productoService.getById(id);
    this.producto = producto;
  }
}
