import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interfaces';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-area-clientes',
  templateUrl: './area-clientes.component.html',
  styleUrls: ['./area-clientes.component.css']
})
export class AreaClientesComponent implements OnInit {
  usuario: Usuario;
  imagen: any;

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private usuariosService:UsuariosService) {
    // const usuarioId = this.activatedRouter.snapshot.paramMap.get('id')
    this.usuariosService.getById()
      .then((result) => {
        // console.log(result)
      })
    .catch((error)=>{console.log(error)})
  }

  async ngOnInit(): Promise<void> {
    
    // const id = this.activatedRouter.snapshot.paramMap.get('id');
    const usuario = await this.usuariosService.getById();
    this.usuario = usuario;
    // console.log(this.usuario)
  }

    // this.usuariosService.getById(id)
    // .then((response) => {
    //   console.log(response)
     
    // })
    // .catch((error) => console.log(error));
      goToEdit(usuario:any): void  {
        this.router.navigate(['editarDatos/:',usuario] )
      }
    
        obtenerImagen(): string{
          if (this.usuario && this.usuario.imagen) {
            return `url('${this.usuario.imagen}')`
      
          } else {
            return `url('../../../assets/img-defecto.png')`
          }
      
        }
  }
