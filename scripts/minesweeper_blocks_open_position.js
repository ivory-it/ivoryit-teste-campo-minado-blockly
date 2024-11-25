Blockly.defineBlocksWithJsonArray([
  {
    type: 'open_position',
    message0: 'Abrir casa da linha %1 e coluna %2',
    args0: [
      {
        type: 'input_value',
        name: 'ROW', // Identificador do campo de entrada
        check: 'Number' // Aceita apenas blocos que geram números
      },
      {
        type: 'input_value',
        name: 'COLUMN', // Identificador do campo de entrada
        check: 'Number' // Aceita apenas blocos que geram números
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 355
  }
]);

javascript.javascriptGenerator.forBlock['open_position'] = function (block) {
  const row = Blockly.JavaScript.valueToCode(block, 'ROW', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  
  return `campoMinado.Abrir(${row}, ${column});`;
};
