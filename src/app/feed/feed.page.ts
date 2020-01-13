import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
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

  public nomeUsuario = 'Vitor Carrijo Gonçalves';

  constructor() { }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ngOnInit() {
  }

}
