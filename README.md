# Rentalx

**RF** => Requisitos funcionais.<br>
**RNF** => Requisitos não funcionais.<br>
**RN** => Regra de negócio.<br>

## Cadastro de Carro

**RF**<br>
Deve ser possivel cadastrar um novo carro.<br>

**RN**<br>
Não deve ser possível cadastrar um carro com uma placa já existente.<br>
O carro deve ser cadastrado, por padrão, com disponibilidade.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


## Listagem de carros

**RF**<br>
Deve ser possivel listar todos os carros disponíveis.<br>
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.<br>
Deve ser possível listar todos os carros disponíveis pelo nome da marca.<br>
Deve ser possível listar todos os carros disponíveis pelo nome do carro.<br>

**RN**<br>
O usuário não precisa estar logado no sistema.


## Cadastro de Especificação no Carro

**RF**<br>
Deve ser possível cadastrar uma especificação para um carro.<br>


**RN**<br>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


## Cadastro de Imagens do Carro

**RF**<br>
Deve ser possível cadastrar a imagem do carro.<br>
Deve ser possível listar todos os carros.<br>

**RNF**<br>
Utilizar o multer para upload dos arquivos<br>

**RN**<br>
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


## Aluguel de Carro

**RF** 
Deve ser possível cadastrar um aluguel.<br>

**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas.<br>
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br>
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.<br>
O usuário deve está logado na aplicação.<br>
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.<br>


## Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro.<br>

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.<br>
Ao realizar o devolução, o carro deverá ser liberado para outro aluguel.<br>
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.<br>
Ao realizar a devolução, deverá ser calculado o total do aluguel.<br>
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.<br>
Caso haja multa, deverá ser somado ao total do aluguel.<br>
O usuário deve estar logado na aplicação.<br>

## Listagem de alugueis para o usuário

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário<br>

**RN**
O usuário deve estar logado na aplicação<br>

## Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail<br>
- O usuário deve receber um email com o passo a passo para a recuperação da senha<br>
- O usuário deve conseguir inserir uma senha<br> 

**RN**
- O usuário precisa informar uma nova senha<br>
- O link enviado para a recuperação deve expirar em 3horas<br>