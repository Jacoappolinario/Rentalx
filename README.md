# Rentalx

**RF** => Requisitos funcionais.<br>
**RNF** => Requisitos não funcionais.<br>
**RN** => Regra de negócio.<br>

## Cadastro de Carro

**RF**
Deve ser possivel cadastrar um novo carro.<br>

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.<br>
O carro deve ser cadastrado, por padrão, com disponibilidade.<br>
* O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


## Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponíveis.<br>
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.<br>
Deve ser possível listar todos os carros disponíveis pelo nome da marca.<br>
Deve ser possível listar todos os carros disponíveis pelo nome do carro.<br>

**RN**
O usuário não precisa estar logado no sistema.


## Cadastro de Especificação no Carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.<br>


**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


## Cadastro de Imagens do Carro

**RF**
Deve ser possível cadastrar a imagem do carro.<br>
Deve ser possível listar todos os carros.<br>

**RNF**
Utilizar o multer para upload dos arquivos<br>

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.<br>
O usuário responsável pelo cadastro deve ser um usuário administrador.<br>


## Aluguel de Carro

**RF** 
Deve ser possível cadastrar um aluguel.<br>

**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br>
Não deve ser possível cadastrar um novo alguel caso já exista um aberto para o mesmo carro.<br>
O usuário deve está logado na aplicação.<br>
