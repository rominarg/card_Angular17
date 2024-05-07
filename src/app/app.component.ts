import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor,NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imagenList: { url: string, name: string , category: string}[] = [
    { url: "./assets/child.jpg", name:"Niña jugando", category: "Categoría: Niño" },
    { url: "./assets/ai-generated.jpg", name:"Miradas" , category: "Categoría: Adultos"},
    { url: "./assets/couple.jpg", name:"Pareja de Ancianos", category: "Categoría: Adultos"},
    { url: "./assets/crayons.jpg", name:"Colores", category: "Categoría Motricidad: Fina"},
  ];

}
