import { Component , OnInit} from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  empresas : any[] = [];
  currentEmpresa : any = {};
  selectedFile: File | null = null;

  constructor(private itemService: EmpresasService){}
  

  ngOnInit(): void {
    this.getItems()

  }


  getItems(): void {
    this.itemService.getItems()
      .subscribe((empresas) => {
        this.empresas = empresas;
        
      },
      error =>{
        console.error("Error al crear:",error);
      }
      
      
      );
  }


  getItemById(id: string): void {
    this.itemService.getItemById(id)
      .subscribe((item) => {
        this.currentEmpresa = item;
      });
  }


  createItem(item: any): void {
    const formData = new FormData();
    formData.append('nombre', this.currentEmpresa.nombre);
    formData.append('email', this.currentEmpresa.email);
    formData.append('telefono', this.currentEmpresa.telefono);
    formData.append('imagen', this.selectedFile as Blob);
  
    this.itemService.createItem(formData)
      .subscribe(
        () => {
          this.getItems();
          this.currentEmpresa = {};
          this.selectedFile = null; // Limpiar la selección de archivos después de la creación exitosa
        },
        error => {
          console.error("Error al crear:", error);
        }
      );
  }
  
  updateItem(id: string, item: any): void {
    const formData = new FormData();
    formData.append('nombre', this.currentEmpresa.nombre);
    formData.append('email', this.currentEmpresa.email);
    formData.append('telefono', this.currentEmpresa.telefono);
    formData.append('imagen', this.selectedFile as Blob);
  
    this.itemService.updateItem(id, formData)
      .subscribe(
        () => {
          this.getItems();
          this.currentEmpresa = {};
          this.selectedFile = null; // Limpiar la selección de archivos después de la actualización exitosa
        },
        error => {
          console.error("Error al actualizar:", error);
        }
      );
  }
  


  deleteItem(id: string): void {
    this.itemService.deleteItem(id)
      .subscribe(() => {
        this.getItems();
      });
  }


  editItem(id: string): void {
    this.getItemById(id);
  }
   // Método para manejar la selección de archivos
  onFileSelected(event: any)  {
    this.selectedFile = event.target.files[0];
  }
  

}
