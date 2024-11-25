Blockly.defineBlocksWithJsonArray([
  {
    type: 'board',
    message0: 'String Tabuleiro',
    tooltip: 'Representa o tabuleiro de forma linear, ou seja, a cada 9 caracteres se inicia a nova linha.',
    output: 'String',
    previousStatement: null,
    nextStatement: null,
    colour: 355
  }
]);

javascript.javascriptGenerator.forBlock['board'] = function (block) {
  return ['campoMinado.Tabuleiro()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
