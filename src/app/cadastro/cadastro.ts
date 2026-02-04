import { Component, inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { Cliente } from './cliente'; // Modelo Cliente
import { ClienteService } from '../cliente'; // Service
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Brasilapi as BrasilapiService } from '../brasilapi';
import { Estado, Municipio } from '../brasilapi.models';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIcon,
    MatIconModule,
    MatSnackBarModule,
    NgxMaskDirective,
    CommonModule], providers: [
      provideNgxMask()
    ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})


export class Cadastro implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  estados: Estado[] = [];
  minicipios: Municipio[] = [];



  constructor(
    private service: ClienteService,
    private brasilApiService: BrasilapiService,
    private route: ActivatedRoute,
    private router: Router
    ,
    private snack: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    // Verifica se há um ID na query string para edição
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      // console.log("Parâmetros Recebidos: ", params);
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this.service.buscarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
          if (this.cliente.uf) {
            const event = { value: this.cliente.uf };
            this.carregarMunicipios(event as MatSelectChange);
          }
        } else {
          this.cliente = Cliente.newCliente();
          this.atualizando = false;
        }
      } else {
        // Sem ID: novo cadastro - limpa o formulário
        this.cliente = Cliente.newCliente();
        this.atualizando = false;
      }
    });

    this.carregarUFs();
  }


carregarUFs() {
  this.brasilApiService.listarUFs().subscribe({
    //next: listaEstados => console.log("lista estados: ", listaEstados),
    next: listaEstados => this.estados = listaEstados,
    error: erro => console.log("Erro ao carregar UFs: ", erro)
  })
}

carregarMunicipios(event: MatSelectChange) {
  const ufSelecionada = event.value;
  this.brasilApiService.listarMunicipios(event.value).subscribe({
    next: listaMunicipios => this.minicipios = listaMunicipios,
    error: erro => console.log("Erro ao carregar municípios: ", erro)
  })
}



salvar() {
  if (this.atualizando) {
    // Editando cliente existente
    this.service.atualizar(this.cliente);
    this.mostrarMensagem("Cliente atualizado com sucesso!");
    // permanece na mesma página após atualização
  } else {
    // Novo cliente
    this.cliente.id = this.gerarId();
    this.service.salvar(this.cliente);
    this.cliente = Cliente.newCliente();
    this.router.navigate(['/consulta']);
    this.mostrarMensagem("Cliente salvo com sucesso!");
    // permanece na mesma página após salvar
  }
}

  private gerarId(): string {
  return Date.now().toString();
}

mostrarMensagem(mensagem: string) {
  this.snack.open(mensagem, 'Ok', {
  });
}
}
