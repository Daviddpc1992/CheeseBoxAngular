import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { ProductosService } from 'src/app/services/productos.service';
import { RecetasService } from 'src/app/services/recetas.service';



declare var Swal;

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  arrQuesoFav: Producto;
  arrRecetaFav: Receta[];
  show: boolean = true;
<<<<<<< HEAD

  constructor(
    private ProductosService: ProductosService,
    private RecetaService: RecetasService
  ) {}

  ngOnInit(): void {
    this.ProductosService.getById(1)
      .then((response) => {
        this.arrQuesoFav = response;
      })
      .catch((error) => console.log(error));
=======
  

  constructor(private ProductosService: ProductosService, private RecetaService: RecetasService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    
   
    const ProductoId = this.activatedRouter.snapshot.paramMap.get('id')
  
    this.ProductosService.getByItem(5)
      .then(response => {
        this.arrQuesoFav = response
      })
        .catch(error => console.log(error))
    
    
    this.RecetaService.getByItem(8)
      .then(response => {
        
        this.arrRecetaFav = response
>>>>>>> develop

    this.RecetaService.getById(1)
      .then((response) => {
        this.arrRecetaFav = response;
      })
<<<<<<< HEAD
      .catch((error) => console.log(error));
  }
}
=======
      .catch(error => console.log(error))
         
  }
  goToEditUser(item: any): void {
   
  

    this.router.navigate(['editarQueso',item.id] )

  }


  goToEdit(item: any): void {
   
  

    this.router.navigate(['editarQueso',item.id] )

  }
  


  goToDelete(item: any) {
   
    const deleteId = this.ProductosService.deleteById(item.id)
     
    .then(response => {
    
      this.arrQuesoFav = response
    })
    
   .catch (error => console.log(error))
    
    console.log(deleteId)

       
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres quitar de favoritos este queso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Queso Eliminado!'
         
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Conservas tu queso',
        )
      }
    })
    this.router.navigate(['clientes'])
    }

}
>>>>>>> develop
