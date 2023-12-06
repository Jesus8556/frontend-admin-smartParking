import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NivelesService } from 'src/app/services/niveles.service';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
  niveles: any[] = [];

  constructor(private route: ActivatedRoute, private nivelesService: NivelesService) {}

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
}




