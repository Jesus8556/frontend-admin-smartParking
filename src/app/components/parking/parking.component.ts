import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingService } from 'src/app/services/parking.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent {
  lugares: any[] = [];
  lugarForm: FormGroup;
  selectedLugarId: string | null = null;

 

  constructor(private route: ActivatedRoute, private lugaresService: ParkingService, private fb: FormBuilder) {
    this.lugarForm = this.fb.group({
      lugar: ['', Validators.required],
      nivel: [''], // Mantén "nivel" si es el nombre correcto
      estado: [false]
      // Otros campos según tus necesidades
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nivelId = params.get('id');
      this.getLugaresByNivelId(nivelId);
    });
  }

  getLugaresByNivelId(nivelId: string | null): void {
    if (nivelId) {
      this.lugaresService.getLugaresByNivelId(nivelId).subscribe((lugares) => {
        this.lugares = lugares;
      });
    }
  }

  loadLugarDetails(lugarId: string): void {
    this.lugaresService.getLugarById(lugarId).subscribe((lugar) => {
      this.lugarForm.patchValue({
        lugar: lugar.lugar,
        nivel: lugar.nivel.nivel, // Mantén "nivel" si es el nombre correcto
        estado: lugar.estado
        // Otros campos según tus necesidades
      });

      this.selectedLugarId = lugarId;
    });
  }

  submitLugarForm(): void {
    const lugarData = {
      lugar: this.lugarForm.value.lugar,
      nivel: this.lugarForm.value.nivel,
      estado: this.lugarForm.value.estado
      // Otros campos según tus necesidades
    };

    if (this.selectedLugarId) {
      this.lugaresService.updateLugar(this.selectedLugarId, lugarData).subscribe(() => {
        this.getLugaresByNivelId(this.route.snapshot.paramMap.get('id'));
        this.resetForm();
      });
    } else {
      this.lugaresService.createLugar(lugarData).subscribe(() => {
        this.getLugaresByNivelId(this.route.snapshot.paramMap.get('id'));
        this.resetForm();
      });
    }
  }

  deleteLugar(lugarId: string): void {
    this.lugaresService.deleteLugar(lugarId).subscribe(() => {
      this.getLugaresByNivelId(this.route.snapshot.paramMap.get('id'));
      this.resetForm();
    });
  }

  resetForm(): void {
    this.lugarForm.reset();
    this.selectedLugarId = null;
  }

  // Método para enviar datos del formulario y realizar operaciones CRUD


}
