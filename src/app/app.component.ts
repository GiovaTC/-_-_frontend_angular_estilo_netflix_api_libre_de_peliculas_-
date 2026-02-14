import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,            // ✅ obligatorio
  imports: [RouterOutlet],     // ✅ permitido en Standalone
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected readonly title = signal('netflix-ghibli');

}