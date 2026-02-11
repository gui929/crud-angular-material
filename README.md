# 💼 CRUD Angular com Angular Material

![Angular](https://img.shields.io/badge/Angular-21.1-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Material](https://img.shields.io/badge/Material-21.1-0081CB?style=for-the-badge&logo=material-design)

Projeto **profissional de portfólio** desenvolvido com **Angular** e **Angular Material**.

---

## ✨ Visão Geral

Aplicação web do tipo **CRUD (Create, Read, Update, Delete)**, utilizando Angular e Angular Material para entregar uma experiência moderna, responsiva e alinhada ao Material Design.

O projeto evidencia:
- Organização de código
- Uso correto do Angular
- Interface limpa e profissional
- Boas práticas de desenvolvimento frontend

---

## 🛠️ Tecnologias & Ferramentas

- ⚡ **Angular 21.1** (Angular CLI)
- 🎨 **Angular Material 21.1**
- 🟦 **TypeScript 5.9**
- 🧱 **HTML5**
- 🎨 **SCSS**
- 📦 **Node.js** & **NPM**
- 🛠️ **Angular CLI**
- 💻 **VS Code**
- 🔄 **Git & GitHub**

---

## 🎯 Funcionalidades Implementadas

✔️ Cadastro de registros  
✔️ Listagem de dados em tabela  
✔️ Edição de informações  
✔️ Exclusão de registros  
✔️ Interface responsiva  
✔️ Componentes reutilizáveis  
✔️ Padrão visual com Angular Material  
✔️ **Integração com Brasil API** (busca de estados e municípios)  
✔️ Máscaras de CPF com validação  
✔️ Sistema de busca e filtro de clientes  
✔️ Feedback visual com notificações (SnackBar)  
✔️ Roteamento e navegação entre páginas  
✔️ Validação de formulários  

---

## 🌐 APIs Integradas

### Brasil API
O projeto utiliza a **[Brasil API](https://brasilapi.com.br/)** para:

- **Listagem de UFs**: Carrega todos os estados brasileiros
  - Endpoint: `https://brasilapi.com.br/api/ibge/uf/v1`
  
- **Listagem de Municípios**: Busca municípios por estado
  - Endpoint: `https://brasilapi.com.br/api/ibge/municipios/v1/{uf}`

**Benefícios:**
- Dados atualizados do IBGE
- Sem necessidade de banco de dados local para UFs/Municípios
- API pública e gratuita
- Melhor experiência do usuário no cadastro

---

## 📦 Dependências Principais

```json
{
  "@angular/core": "^21.1.0",
  "@angular/material": "~21.1.1",
  "@angular/flex-layout": "^15.0.0-beta.42",
  "ngx-mask": "^21.0.1",
  "rxjs": "~7.8.0",
  "uuid": "^11.0.2"
}
```

**Bibliotecas utilizadas:**
- **Angular Material**: Componentes UI (Table, Form, Dialog, Snackbar, etc.)
- **Angular Flex Layout**: Sistema de layout responsivo
- **ngx-mask**: Máscaras para inputs (CPF, telefone, etc.)
- **RxJS**: Programação reativa e Observables
- **UUID**: Geração de IDs únicos

---

## 📂 Estrutura Detalhada do Projeto

```bash
crud-angular-material/
├── public/                      # Arquivos estáticos públicos
├── src/
│   ├── app/
│   │   ├── cadastro/           # Componente de cadastro/edição
│   │   │   ├── cadastro.ts     # Lógica do componente
│   │   │   ├── cadastro.html   # Template
│   │   │   ├── cadastro.scss   # Estilos
│   │   │   └── cliente.ts      # Model Cliente
│   │   ├── consulta/           # Componente de listagem
│   │   │   ├── consulta.ts     # Lógica do componente
│   │   │   ├── consulta.html   # Template com MatTable
│   │   │   └── consulta.scss   # Estilos
│   │   ├── inicio/             # Página inicial
│   │   │   ├── inicio.ts
│   │   │   ├── inicio.html
│   │   │   └── inicio.scss
│   │   ├── app.ts              # Componente raiz
│   │   ├── app.config.ts       # Configurações da aplicação
│   │   ├── app.routes.ts       # Rotas da aplicação
│   │   ├── cliente.ts          # Service principal (CRUD)
│   │   ├── brasilapi.ts        # Service da Brasil API
│   │   └── brasilapi.models.ts # Interfaces da API
│   ├── index.html              # HTML principal
│   ├── main.ts                 # Bootstrap da aplicação
│   └── styles.scss             # Estilos globais
├── angular.json                # Configuração do Angular CLI
├── package.json                # Dependências do projeto
├── tsconfig.json               # Configuração do TypeScript
└── README.md                   # Documentação
```

---

## 🧱 Arquitetura e Boas Práticas

- ✅ Componentização seguindo o padrão Angular
- ✅ Separação de responsabilidades (Services e Components)
- ✅ Organização clara de pastas por funcionalidade
- ✅ Tipagem forte com TypeScript
- ✅ Código limpo e de fácil manutenção
- ✅ Interface consistente com Material Design
- ✅ Uso de Observables e programação reativa
- ✅ Standalone Components (Angular 21)
- ✅ Injeção de dependências
- ✅ Roteamento modular

---

## ▶️ Como Executar Localmente

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão LTS recomendada)
- **NPM** (geralmente vem com Node.js)
- **Angular CLI** (será instalado globalmente)

### Instalação do Angular CLI

```bash
npm install -g @angular/cli
```

### Passos para Executar

1. **Clone o repositório:**
```bash
git clone https://github.com/gui929/crud-angular-material.git
```

2. **Entre no diretório:**
```bash
cd crud-angular-material
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Execute o servidor de desenvolvimento:**
```bash
npm start
```
ou
```bash
ng serve
```

5. **Acesse no navegador:**
```
http://localhost:4200/
```

A aplicação será recarregada automaticamente quando você fizer alterações nos arquivos.

---

## 📜 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção (pasta dist/)
npm test           # Executa testes unitários
npm run watch      # Build em modo watch (desenvolvimento)
ng serve --open    # Inicia e abre automaticamente no navegador
ng build --configuration production  # Build otimizado para produção
```

---

## 📖 Guia de Uso

### 1️⃣ Cadastrar um Cliente

1. Navegue para a página de **Cadastro**
2. Preencha os campos:
   - Nome completo
   - CPF (com máscara automática)
   - E-mail
   - Data de nascimento
   - Selecione o **Estado** (carregado da Brasil API)
   - Selecione o **Município** (filtrado por estado)
3. Clique em **Salvar**
4. Receberá uma notificação de sucesso

### 2️⃣ Listar e Buscar Clientes

1. Acesse a página de **Consulta**
2. Visualize todos os clientes cadastrados na tabela
3. Use o campo de **busca** para filtrar por nome
4. A tabela será atualizada automaticamente

### 3️⃣ Editar um Cliente

1. Na listagem, clique no ícone de **edição** (✏️)
2. Será redirecionado para o formulário com dados preenchidos
3. Altere os campos desejados
4. Clique em **Atualizar**

### 4️⃣ Excluir um Cliente

1. Na listagem, clique no ícone de **exclusão** (🗑️)
2. Confirme a exclusão
3. O cliente será removido e a lista atualizada

---

## 🎨 Componentes Angular Material Utilizados

O projeto faz uso extensivo do **Angular Material**:

| Componente | Uso |
|------------|-----|
| `MatTable` | Listagem de clientes |
| `MatButton` | Botões de ação |
| `MatInput` | Campos de formulário |
| `MatFormField` | Container para inputs |
| `MatSelect` | Dropdowns (UF e Município) |
| `MatCard` | Cards de conteúdo |
| `MatIcon` | Ícones do Material |
| `MatSnackBar` | Notificações/Feedback |
| `MatToolbar` | Barra de navegação |

**Garantindo:**
- 🎨 Interface moderna e consistente
- 📱 Responsividade em todos os dispositivos
- ♿ Acessibilidade (ARIA labels)
- 🎯 Padronização visual

---

## ❗ Problemas Comuns (Troubleshooting)

### Erro: "ng: command not found"
**Solução:** Instale o Angular CLI globalmente
```bash
npm install -g @angular/cli
```

### Erro ao instalar dependências
**Solução:** Limpe o cache do NPM
```bash
npm cache clean --force
npm install
```

### Porta 4200 já em uso
**Solução:** Use outra porta
```bash
ng serve --port 4300
```

### Erro de CORS com Brasil API
**Solução:** A Brasil API já possui CORS configurado. Verifique sua conexão de internet ou tente novamente mais tarde.

### Erro de compilação TypeScript
**Solução:** Verifique se a versão do TypeScript é compatível
```bash
npm install typescript@~5.9.2
```

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch com sua feature (`git checkout -b feature/MinhaFeature`)
3. Commitar suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Fazer push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 👨‍💻 Desenvolvedor

**Guilherme Fernando**  
Desenvolvedor Frontend | Angular

🔗 **GitHub:** [@gui929](https://github.com/gui929)  
🔗 **LinkedIn:** [Guilherme Oliveira](https://www.linkedin.com/in/guilherme-oliveira-346779192/)

---

<div align="center">

**Se este projeto foi útil para você, considere deixar uma ⭐ no repositório!**

</div>
