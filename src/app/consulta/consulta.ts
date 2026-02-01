import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../cliente';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consulta',
  imports: [ MatInputModule, 
    MatCardModule,
    FlexLayoutModule, 
    MatIconModule,
    FormsModule, 
    MatTableModule, 
    MatButtonModule,
    CommonModule,
    MatSnackBarModule ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})

export class Consulta  implements OnInit {

  nomeBusca: string = "";
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email', 'acoes'];
  


  constructor(
    private service: ClienteService,
    private router: Router
    ,
    private snack: MatSnackBar
  ) {


  }

  ngOnInit() {
    // console.log("ngOnInit - Consulta"); // pré load da página
    this.listaClientes = this.service.pesquisarClientes("");
  }
 pesquisar(): void {
    // console.log("pesquisar - Consulta");
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id: string){
    // Navega para a rota de edição com o ID do cliente
    this.router.navigate(['/cadastro'], { queryParams: { "id": id } });

  }

  preparaDeletar(cliente: Cliente){
    cliente.deletando = true;
  } 
  // deleta o registro e logo atualiza a lista
  deletar(cliente: Cliente){
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
    this.snack.open("Cliente deletado com sucesso!", 'Ok', {
    });
  }

  
}


