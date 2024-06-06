
# PDV API

## Descrição
API para um PDV (Frente de Caixa).

## Configuração
1. Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Rode a aplicação:
   ```sh
   npm start
   ```

## Scripts
- `npm start`: Inicia a aplicação.
- `npm run dev`: Inicia a aplicação em modo de desenvolvimento com nodemon.

## Descrição dos Arquivos e Pastas

- **.github/workflows/ci.yml**: Arquivo de configuração para integração contínua (CI).
- **config/database.js**: Configuração de conexão com o banco de dados.
- **controllers/**: Controladores para gerenciar a lógica das rotas.
  - **authController.js**: Controlador para autenticação (login).
  - **categoryController.js**: Controlador para categorias.
  - **userController.js**: Controlador para usuários.
- **middlewares/**: Middlewares para tratamento de requisições.
  - **authMiddleware.js**: Middleware para autenticação de usuário.
- **models/**: Modelos para as tabelas do banco de dados.
  - **user.js**: Modelo para a tabela de usuários.
  - **category.js**: Modelo para a tabela de categorias.
- **routes/**: Definições das rotas da API.
  - **authRoutes.js**: Rotas de autenticação.
  - **categoryRoutes.js**: Rotas de categorias.
  - **userRoutes.js**: Rotas de usuários.
- **scripts/**: Scripts SQL para criação e povoamento do banco de dados.
  - **createTables.sql**: Script para criação das tabelas.
  - **seedCategories.sql**: Script para inserção das categorias iniciais.
- **services/**: Serviços para abstrair a lógica de negócio.
  - **authService.js**: Serviço para autenticação.
  - **userService.js**: Serviço para gerenciamento de usuários.
- **.env.example**: Exemplo de arquivo de variáveis de ambiente.
- **.eslintrc.json**: Configuração do ESLint para linting do código.
- **.gitignore**: Arquivo para ignorar arquivos e pastas desnecessárias no Git.
- **README.md**: Documentação do projeto.
- **index.js**: Arquivo principal da aplicação.
- **package.json**: Dependências e scripts do projeto.
- **package-lock.json**: Versões exatas das dependências instaladas.

