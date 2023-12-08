import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NivelesService } from 'src/app/services/niveles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa ReactiveFormsModule si no lo has hecho


@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
  niveles: any[] = [];
  nivelForm: FormGroup;
  selectedNivelId: string | null = null;

  constructor(private route: ActivatedRoute, private nivelesService: NivelesService, private fb: FormBuilder) {
    this.nivelForm = this.fb.group({
      // Define los campos de tu formulario
      nivel: ['', Validators.required],
      empresa: [''], // Agregar empresa como control si aún no lo has hecho
      imagen: ['']
      // Otros campos según tus necesidades
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const empresaId = params.get('id');
      this.getNivelesByEmpresaId(empresaId);
    });
  }

  getNivelesByEmpresaId(empresaId: string | null): void {
    if (empresaId) {
      this.nivelesService.getNivelesByEmpresaId(empresaId).subscribe((niveles) => {
        this.niveles = niveles;
      });
    }
  }
  loadNivelDetails(nivelId: string): void {
    this.nivelesService.getNivelById(nivelId).subscribe((nivel) => {
      // Llenar el formulario con los detalles del nivel
      this.nivelForm.patchValue({
        nivel: nivel.nivel,
        empresa: nivel.empresa.nombre, // Ajusta esto según la estructura real de tu objeto nivel. Si empresa es un objeto, puedes acceder a su propiedad nombre así.
        imagen: nivel.imagen
        // Otros campos según tus necesidades
      });

      this.selectedNivelId = nivelId;
    });
  }


  // Método para enviar datos del formulario y realizar operaciones CRUD
  submitNivelForm(): void {
    const nivelData = this.nivelForm.value;

    if (this.selectedNivelId) {
      // Actualizar nivel existente
      this.nivelesService.updateNivel(this.selectedNivelId, nivelData).subscribe(() => {
        // Recargar la lista de niveles después de la actualización
        this.getNivelesByEmpresaId(this.route.snapshot.paramMap.get('id'));
        // Restablecer el formulario
        this.resetForm();
      });
    } else {
      // Crear un nuevo nivel
      this.nivelesService.createNivel(nivelData).subscribe(() => {
        // Recargar la lista de niveles después de la creación
        this.getNivelesByEmpresaId(this.route.snapshot.paramMap.get('id'));
        // Restablecer el formulario
        this.resetForm();
      });
    }
  }

  // Método para eliminar un nivel
  deleteNivel(nivelId: string): void {
    this.nivelesService.deleteNivel(nivelId).subscribe(() => {
      // Recargar la lista de niveles después de la eliminación
      this.getNivelesByEmpresaId(this.route.snapshot.paramMap.get('id'));
      // Restablecer el formulario
      this.resetForm();
    });
  }

  // Método para restablecer el formulario
  resetForm(): void {
    this.nivelForm.reset();
    this.selectedNivelId = null;
  }
}




