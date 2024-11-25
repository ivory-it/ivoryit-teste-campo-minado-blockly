# Campo Minado
O jogo foi bastante difundido pelo sistema operacional Windows nos anos 90.
Robert Donner e Curt Johnson foram contratados pela Microsoft em 1989. Curt tinha escrito um programa para o sistema operacional da IBM(OS/2), cujo objetivo era você conseguir atravessar um campo minado de um canto da tela para outro ileso. Robert queria escrever um jogo para Windows para aprimorar sua programação no sistema operacional, e Curt deixou que ele utilizasse o seu código fonte como ponto de partida. Mais tarde a Microsoft decidiu lançar uma coleção de jogos para sua nova plataforma e os funcionários foram convidados a enviar jogos. O campo minado foi enviado e um dos escolhidos a pertencer ao sistema operacional.

## Objetivo do jogo
O jogo consiste em uma matriz quadrada, que ao primeiro clique revela algumas posições. A partir das posições reveladas o jogador devera descobrir todos as posições que não contêm minas terrestres sem ser "explodido". A localização das minas terrestres é descoberta através de um processo lógico, onde o número de uma determinada posição representa a quantidade de minas terrestres em volta dele.

### **Exemplo**

Aqui temos o início de um jogo, repare que a posição marcada de amarelo possui o número 1, portanto em volta deste número possui uma mina terrestre. Como possuímos apenas uma posição não aberta destacada em vermelho, indica que ela possui uma mina terrestre e que não devemos abrir está posição.

![Exemplo campo minado jogada 1](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/1.png)

Agora podemos analisar uma próxima posição (destacada de amarelo). Repare que em volta do número existem duas posições que não abrimos, mas uma possui uma bomba (descoberta na etapa anterior), portanto ficou liberado a casa destacada em verde, pois a posição atual indica que em volta existe apenas uma mina terrestre. Assim ela está livre para abrir.

![Exemplo campo minado jogada 2](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/2.png)

Outro exemplo é a casa destaca em amarelo, nesta situação onde todas as posições não abertas são iguais ao número da posição destacada, indica que todas as posições possuem uma mina terrestre.

![Exemplo campo minado jogada 3](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/3.png)

Se no passo anterior descobrimos três minas terrestres, o item destacado em amarelo possui duas minas terrestres em volta. Portanto a posição destaca em verde está livre para abrirmos.

![Exemplo campo minado jogada 3](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/4.png)

Antes de enfrentar o desafio, que tal jogar algumas partidas para você entender a dinâmica: https://minesweeper.online/

# Desafio
Neste link (https://ivory-it.github.io/ivoryit-teste-campo-minado-blockly) temos uma IDE de desenvolvimento do desafio. É uma IDE de desenvolvimento usando blocos.
Além dos blocos para loops, condições, variáveis e cálculos. Você terá blocos com valores e funções do Campo Minado.

![Explicação IDE](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/5.png)

![String Tabuleiro](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/6.png)
- String que contém os valores das casas do tabuleiro de forma linear, ou seja, a cada 9 caracteres, você tem uma nova linha. Esse é o valor do início do jogo:
00000001-000000011122100000---322110-------21------------------------------------
- Sempre que você abrir uma casa a variável é atualizada com os campos abertos.
- `Valores númericos`: Números de minas terrestres que a posição possui em volta;
- `Traço (-)`: Posições que ainda não foram abertas, a qual o seu algoritmo deve analisar o atributo Tabuleiro e tomar a decisão de abrir ou não.

![Status atual do jogo](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/7.png)
- String que retorna o status do jogo à medida que você abre as casas. 
0 = Jogo aberto, faltam casas para abrir, 1 = Vitória e 2 = Game Over.
- Sempre que você abrir uma casa a variável é atualizada o status do jogo.

![Abrir casa da linha x e coluna y](https://github.com/ivory-it/ivoryit-teste-campo-minado-blockly/blob/main/img/8.png)
- Função que executa a abertura da casa informada pelo número da linha e coluna. Ao abrir uma casa, na área de visualização a mesma é aberta, e na área de resultado é exibido o status do jogo. 

Como todos sabem, uma string é um vetor de caracteres, portanto o objetivo do algoritmo é realizar a leitura da String Tabuleiro utilizando a lógica de identificação das minas terrestres conforme a sessão objetivo do jogo. Após analisar e identificar que é seguro abrir uma posição, seu algoritmo deve chamar o método "Abrir casa...". Ao abrir todas as posições que não possuem minas terrestres a variável "Status atual jogo" irá receber o valor 1 de vitória.

## Sobre uso da IDE
- Botão EXECUTAR CÓDIGO: Executa o algorítimo criado;
- Botão SALVAR CÓDIGO: Salva o algoritmo criado no local storage do navegador. Com isso você pode fechar o navegador, ao voltar a IDE irá carregar seu código de forma automática. Atenção, ao limpar informações do browser o seu código irá ser apagado;
- Botão EXPORTAR CÓDIGO: Gera um XML com o seu algorítimo;
- Botão IMPORTAR CÓDIGO: Uma vez com o XML salvo, você pode importar ele usando o campo para carregar arquivo e clicando no botão seu código é restaurado.

## Roteiro
1. Acessar a IDE: https://ivory-it.github.io/ivoryit-teste-campo-minado-blockly;
2. Criar seu algorítimo;
3. Desafio concluído, clique em exportar para gerar o XML com seu código;
4. Envio seu arquivo respondendo o e-mail a qual você recebeu o desafio.

## Dicas / Regras
1. Ao codificar mantenha seu código organizado, com nomes de variáveis intuitivos. Manter padronização ajuda a equipe entender o que foi codificado;
2. O algorítimo deve realizar uma analise conforme a seção Objetivo do jogo, e não um algoritmo de força bruta, abrindo todos as casas para se descobrir as minas terrestres para depois reabrir somente as que não tem minas terrestres;
5. O algorítimo deve analisar a string que representa o tabuleiro, não é valido fixar a abertura das posições que não possuem minas terrestres;
6. Não é para criar uma aplicação onde o usuário escolha qual posição abrir, é para ser um algorítimo autônomo que realize as jogadas;
7. Qualquer duvida envie suas duvidas para o a qual recebeu o desafio.
