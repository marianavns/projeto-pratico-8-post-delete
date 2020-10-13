<img src="https://i.imgur.com/vw9T1Xv.png" alt="Mulher segurando um lápis com o mesmo tamanho que ela e escrevendo um bloco de notas gigante. Um copo de café, também gigante, está ao lado" width="200"/>

# Anotação sobre o que faz cada método

**GET**: Mostra registros em tela, seja o banco de dados completo ou uma informação específica. 

**DELETE**: Apaga registros.

**POST**: Adiciona um novo registro. Precisamos de um *body novinho*.

**PUT**: Edita um registro já existente. Precisamos de um *body novinho* e achar o registro a ser editado -> por isso não dá para criar um novo registro com o PUT. 

**CATCH**: 


![Loja de livros lilás. Um homem está no balcão olhando para o computador e uma mulher está com seus livros para comprar sobre o balcão.](https://i.imgur.com/1G71T1t.gif)

# Instruções para o projeto prático
> Exercício proposto pela instrutora Caroline Jandoso (https://github.com/Jandoso)

Você foi contratada para fazer a implementação de um sistema de uma livraria no centro de Recife.

✔️ 1. A contratante espera que no sistema ela possa fazer a inclusão de seu estoque contendo as seguintes informações:

Livros:
- ISBN
- ID
- Título
- Autoria
- Editora
- Lançamento
- Gênero

2. A mesma livraria decidiu integrar um sisteminha em que será possível a adição de seus funcionários. A contratante espera que no sistema ela possa fazer a inclusão dos dados de cada um deles, contendo:

Funcionários:
- Nome
- ID
- Setor
- Função
- Horário de Trabalho
- Está em treinamento?

✔️ 3. Nossa livraria gostaria de garantir que será possível a exclusão do registro de determinado livro.

4. Eles também desejam que seja possível a exclusão do registro de um funcionário.

✔️ 5. Nossa contratante espera que seja possível o acesso a uma lista completa com todos os livros do estoque.

✔️ 6. Eles também adorariam ter acesso a uma lista com todos os funcionários.

7. Seria de grande valia se nossa livraria tivesse acesso a uma lista com todos os livros por categoria.

✔️ 8. A livraria gostaria de ter acesso a idade de um funcionário, de acordo com seu id.

Observação: Popule nosso model de livros e funcionários com pelo menos 10 registros em cada.