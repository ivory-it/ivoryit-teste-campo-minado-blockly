Blockly.defineBlocksWithJsonArray([
  {
    type: 'open_position',
    message0: 'Abrir casa da linha %1 e coluna %2',
    args0: [
      {
        type: 'field_dropdown',
        name: 'ROW',
        options: [
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9']
        ]
      },
      {
        type: 'field_dropdown',
        name: 'COLUMN',
        options: [
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9']
        ]
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 355
  }
]);

javascript.javascriptGenerator.forBlock['open_position'] = function (block) {
  const row = block.getFieldValue('ROW');
  const column = block.getFieldValue('COLUMN');

  return `$('#row${row} .column${column}').addClass('open');campoMinado.Abrir(${row}, ${column});`;
};
