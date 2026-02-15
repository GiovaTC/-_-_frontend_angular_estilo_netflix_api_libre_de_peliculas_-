import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../core/services/movie.service";
import { Movie } from "../../models/movie.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    movies: Movie[] = [];
    featured!:  Movie;

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
            this.featured = data[0];
        });
    }
}