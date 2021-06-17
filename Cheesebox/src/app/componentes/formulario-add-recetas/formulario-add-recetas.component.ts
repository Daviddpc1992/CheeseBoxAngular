import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';

declare var Swal;

@Component({
  selector: 'app-formulario-add-recetas',
  templateUrl: './formulario-add-recetas.component.html',
  styleUrls: ['./formulario-add-recetas.component.css'],
})
export class FormularioAddRecetasComponent implements OnInit {
  formulario: FormGroup;
  form: any[];

  files;

  constructor(private RecetasService: RecetasService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      quesoUtilizado: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      tiempo: new FormControl('', [Validators.required]),
      raciones: new FormControl(),
      ingredientes: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      elaboracion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      imagen: new FormControl('', [Validators.required]),
    });
  }


  ngOnInit(): void {}

  objectLength(object): number {
    if (!object) {
      return 0;
    }
    return Object.keys(object).length;
  }

  checkControl(controlName, validatorName) {
    return (
      this.formulario.get(controlName).hasError(validatorName) &&
      this.formulario.get(controlName).touched
    );
  }

  async onSubmit() {
    const fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('quesoUtilizado', this.formulario.value.tipoLeche);
    fd.append('tiempo', this.formulario.value.origen);
    fd.append('raciones', this.formulario.value.caracteristicas);
    fd.append('ingredientes', this.formulario.value.color);
    fd.append('elaboracion', this.formulario.value.tipo);
    const response = await this.RecetasService.create(fd);

    if (response['affectedRows'] === 1) {
      Swal.fire('Registro completado con éxito');
      this.router.navigate(['/recetas']);
    }
  }
  onChange($event) {
    this.files = $event.target.files;
  }
  
}
