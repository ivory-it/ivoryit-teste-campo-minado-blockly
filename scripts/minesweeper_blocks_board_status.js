Blockly.defineBlocksWithJsonArray([
  {
    type: 'board_status',
    message0: 'Status atual do jogo',
    tooltip: '0 = Jogo aberto, faltam casas para abrir, 1 = Vitória e 2 = Game Over',
    output: 'String',
    previousStatement: null,
    nextStatement: null,
    colour: 355
  }
]);

javascript.javascriptGenerator.forBlock['board_status'] = function (block) {
  return ['campoMinado.JogoStatus()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
