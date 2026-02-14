# -_-_frontend_angular_estilo_netflix_api_libre_de_peliculas_- :. 
# 🎬 Frontend Angular estilo Netflix (API libre de películas):

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/d1b5e17d-8da9-4d69-8d59-465143a98ddd" />  

A continuación se presenta un **frontend en Angular 20.3.9**, con **diseño tipo Netflix**, que consume una **API pública y libre** de películas (**sin API Key**), usando una **arquitectura clara** y **código listo para IntelliJ IDEA o VS Code**.

---

## 🎥 API de Películas (Software Libre):

Se utiliza la **Studio Ghibli API**:

- 🔗 Endpoint: https://ghibliapi.vercel.app/films  
- ✅ Open Source  
- 🔐 Sin autenticación  
- 📦 JSON limpio  
- 🎓 Ideal para demos, pruebas técnicas y proyectos académicos  

---

## 🖥️ Diseño tipo Netflix:
Interfaz oscura, hero destacado y grilla de películas, inspirada en Netflix.

---

## 🧱 Arquitectura Frontend:

```text
src/
 ├── app/
 │   ├── core/
 │   │   └── services/
 │   │       └── movie.service.ts
 │   ├── models/
 │   │   └── movie.model.ts
 │   ├── pages/
 │   │   └── home/
 │   │       ├── home.component.ts
 │   │       ├── home.component.html
 │   │       └── home.component.scss
 │   ├── app.component.*
 │   └── app.routes.ts
 └── styles.scss

1️⃣ Crear el proyecto
npm install -g @angular/cli
ng new netflix-ghibli --style=scss --routing
cd netflix-ghibli
ng serve

2️⃣ Modelo de Película

movie.model.ts

export interface Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  image: string;
  movie_banner: string;
}

3️⃣ Servicio de Consumo API

movie.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {

  private apiUrl = 'https://ghibliapi.vercel.app/films';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}

📌 Importar HttpClient
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});

4️⃣ Home Component (Estilo Netflix)
home.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  featured!: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      this.featured = data[0];
    });
  }
}
home.component.html
<div class="hero" [style.backgroundImage]="'url(' + featured?.movie_banner + ')'">
  <div class="hero-content">
    <h1>{{ featured?.title }}</h1>
    <p>{{ featured?.description }}</p>
  </div>
</div>

<section class="movie-row">
  <h2>Películas</h2>
  <div class="movie-grid">
    <div class="movie-card" *ngFor="let movie of movies">
      <img [src]="movie.image" />
      <h3>{{ movie.title }}</h3>
    </div>
  </div>
</section>
home.component.scss
.hero {
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #000, transparent);
  }

  .hero-content {
    position: absolute;
    bottom: 60px;
    left: 60px;
    max-width: 600px;
  }
}

.movie-row {
  padding: 20px 60px;

  h2 {
    color: #fff;
    margin-bottom: 15px;
  }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
  }

  .movie-card {
    cursor: pointer;
    transition: transform .3s;

    img {
      width: 100%;
      border-radius: 6px;
    }

    &:hover {
      transform: scale(1.08);
    }

    h3 {
      color: #ccc;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}

5️⃣ Estilos Globales (Netflix Dark)

styles.scss

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #141414;
}

* {
  box-sizing: border-box;
}

6️⃣ Rutas

app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }
];

✅ Resultado Final

- ✔ UI tipo Netflix
- ✔ Angular 20.x moderno
- ✔ API REST libre (sin API Key)
- ✔ Arquitectura profesional
- ✔ Fácil de extender (login, categorías, favoritos, backend) / .
