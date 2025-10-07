import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true, // obligatorio para standalone
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('poliApp');

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Configurar idioma por defecto como español
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
