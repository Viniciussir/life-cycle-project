import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompras: Item[] = []

  constructor() {
    this.listaDeCompras = JSON.parse(localStorage.getItem('itens')|| '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompras;
  }

  criarItem(nomeDoItem: string){
    const id = this.listaDeCompras.length + 1
    const item : Item = {
      id: id,
      nome: nomeDoItem, 
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item
  }

  adicionartemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompras.push(item);
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string){
    const itemEditado : Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompras.splice(Number(id)-1, 1, itemEditado);
  }

  limparLista(){
    this.listaDeCompras = []
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompras));
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompras));
  }

}
