import { MovieService } from './../services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  providers: [
    MovieService
  ]
})
export class FeedPage implements OnInit {

  public objetoFeed = {
    titulo: 'Vitor CarrijoGonçalves',
    data: '5 de novembro de 1955',
    descricao: 'Estou criando um app incrível ...',
    qtdLikes: 12,
    qtdComments: 4,
    timeComment: '11h ago'
  };

  public listaFilmes = new Array<any>();

  public nomeUsuario = 'Vitor Carrijo Gonçalves';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);
        this.listaFilmes = objetoRetorno.results;
        console.log(objetoRetorno);
      }, error => {
        console.log(error);
      }
    );
  }

}
