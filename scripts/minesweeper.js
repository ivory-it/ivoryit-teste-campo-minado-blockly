'use strict';

function CampoMinado() {

    // 0 - Jogo em aberto, continue procurando as casas que não possuem bombas;
    // 1 - Vitoria, você encontrou todas as casas que não possui bomba;
    // 2 - GameOver, você encontrou uma bomba.
    var Status = 0;

    // O tabuleiro inicia com 34 casas abertas. Ao abrir 71 casas(casas que não possuem bombas) o jogo é ganho.
    var JogoTotalDeCasasAbertas = 34;

    var Solucao = [
        [ "0", "0", "0", "0", "0", "0", "0", "1", "*" ],
        [ "0", "0", "0", "0", "0", "0", "0", "1", "1" ],
        [ "1", "2", "2", "1", "0", "0", "0", "0", "0" ],
        [ "1", "*", "*", "3", "2", "2", "1", "1", "0" ],
        [ "1", "2", "3", "*", "*", "4", "*", "2", "1" ],
        [ "0", "0", "1", "3", "*", "*", "3", "*", "2" ],
        [ "0", "0", "0", "1", "2", "2", "2", "2", "*" ], 
        [ "0", "0", "0", "0", "0", "0", "0", "1", "1" ],
        [ "0", "0", "0", "0", "0", "0", "0", "0", "0" ]
    ];

    var Jogo = [
        [ "0", "0", "0", "0", "0", "0", "0", "1", "-" ],
        [ "0", "0", "0", "0", "0", "0", "0", "1", "1" ],
        [ "1", "2", "2", "1", "0", "0", "0", "0", "0" ],
        [ "-", "-", "-", "3", "2", "2", "1", "1", "0" ],
        [ "-", "-", "-", "-", "-", "-", "-", "2", "1" ],
        [ "-", "-", "-", "-", "-", "-", "-", "-", "-" ],
        [ "-", "-", "-", "-", "-", "-", "-", "-", "-" ],
        [ "-", "-", "-", "-", "-", "-", "-", "-", "-" ],
        [ "-", "-", "-", "-", "-", "-", "-", "-", "-" ]
    ];

    /**
     * Status atual do jogo após você realizar uma abertura de uma casa.
     * 0 - Jogo em aberto, continue procurando as casas que não possuem bombas;
     * 1 - Vitoria, você encontrou todas as casas que não possui bomba;
     * 2 - GameOver, você encontrou uma bomba.
     * @access Public
     * @return int
     */
    this.JogoStatus = function () {
        return Status;
    }

    this.Tabuleiro = function () {
        var tabuleiro = "";

        for (var x = 0; x < 9; x++)
        {
            for (var y = 0; y < 9; y++)
            {
                tabuleiro += Jogo[x][y];
            }

            if (x != 8)
            {
                tabuleiro +=  "" + "\r\n";
            }
        }

        return tabuleiro;
    }

    /**
     * Método responsável por abrir uma casa do tabuleiro e alterar o status do jogo para:
     * GameOver(2) caso você abra uma bomba;
     * Aberto(0) caso ainda não tenha encontrado todas as casas que não possui uma bomba e você deve continuar procurando;
     * Vitoria (1) caso encontre todas as casas que não possuem bomba.
     * Como nosso jogo é baseado em um tabuleiro 9 x 9, informe valores dentro deste intervalo.
     * @access Public
     * @param int linha
     * @param int coluna
     * @return void
     */
    this.Abrir = function (linha, coluna) {
        if (linha >= 1 && linha <= 9 && coluna >= 1 && coluna <= 9)
        {
            linha--;
            coluna--;

            if (Status == 2 || Solucao[linha][coluna] == "*")
            {
                Jogo[linha][coluna] = Solucao[linha][coluna];
                Status = 2;
            }
            else
            {
                if (Jogo[linha][coluna] == "-" && Solucao[linha][coluna] != "0")
                {
                    Jogo[linha][coluna] = Solucao[linha][coluna];
                    JogoTotalDeCasasAbertas++;
                }
                else if (Jogo[linha][coluna] == "-" && Solucao[linha][coluna] == "0")
                {
                    if (Jogo[4][0] == "-")
                    {
                        Jogo[4][0] = Solucao[4][0];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[4][1] == "-")
                    {
                        Jogo[4][1] = Solucao[4][1];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[4][2] == "-")
                    {
                        Jogo[4][2] = Solucao[4][2];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[5][2] == "-")
                    {
                        Jogo[5][2] = Solucao[5][2];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[5][3] == "-")
                    {
                        Jogo[5][3] = Solucao[5][3];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[6][3] == "-")
                    {
                        Jogo[6][3] = Solucao[6][3];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[6][4] == "-")
                    {
                        Jogo[6][4] = Solucao[6][4];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[6][5] == "-")
                    {
                        Jogo[6][5] = Solucao[6][5];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[6][6] == "-")
                    {
                        Jogo[6][6] = Solucao[6][6];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[6][7] == "-")
                    {
                        Jogo[6][7] = Solucao[6][7];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[7][7] == "-")
                    {
                        Jogo[7][7] = Solucao[7][7];
                        JogoTotalDeCasasAbertas++;
                    }

                    if (Jogo[7][8] == "-")
                    {
                        Jogo[7][8] = Solucao[7][8];
                        JogoTotalDeCasasAbertas++;
                    }

                    Jogo[5][0] = "0";
                    Jogo[5][1] = "0";
                    Jogo[6][0] = "0";
                    Jogo[6][1] = "0";
                    Jogo[6][2] = "0";
                    Jogo[7][0] = "0";
                    Jogo[7][1] = "0";
                    Jogo[7][2] = "0";
                    Jogo[7][3] = "0";
                    Jogo[7][4] = "0";
                    Jogo[7][5] = "0";
                    Jogo[7][6] = "0";
                    Jogo[8][0] = "0";
                    Jogo[8][1] = "0";
                    Jogo[8][2] = "0";
                    Jogo[8][3] = "0";
                    Jogo[8][4] = "0";
                    Jogo[8][5] = "0";
                    Jogo[8][6] = "0";
                    Jogo[8][7] = "0";
                    Jogo[8][8] = "0";
                    JogoTotalDeCasasAbertas += 21;
                }

                if (JogoTotalDeCasasAbertas == 71)
                {
                    Status = 1;
                }
            }
        }
    }
}