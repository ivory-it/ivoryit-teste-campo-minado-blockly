(function () {
  const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Campo Minado",
        "colour": "#a2595f",
        "contents": [
          { "kind": "block", "type": "board" },
          { "kind": "block", "type": "board_status" },
          { "kind": "block", "type": "open_position" }
        ]
      },
      {
        "kind": "category",
        "name": "Lógica",
        "colour": "#5b80a5",
        "contents": [
          { "kind": "block", "type": "controls_if" },
          { "kind": "block", "type": "logic_compare" },
          { "kind": "block", "type": "logic_operation" },
          { "kind": "block", "type": "logic_negate" },
          { "kind": "block", "type": "logic_boolean" },
          { "kind": "block", "type": "logic_null" },
          { "kind": "block", "type": "logic_ternary" }
        ]
      },
      {
        "kind": "category",
        "name": "Laços",
        "colour": "#5ba55b",
        "contents": [
          { "kind": "block", "type": "controls_repeat_ext" },
          { "kind": "block", "type": "controls_repeat" },
          { "kind": "block", "type": "controls_whileUntil" },
          { "kind": "block", "type": "controls_for" },
          { "kind": "block", "type": "controls_forEach" },
          { "kind": "block", "type": "controls_flow_statements" }
        ]
      },
      {
        "kind": "category",
        "name": "Matemática",
        "colour": "#5b67a5",
        "contents": [
          { "kind": "block", "type": "math_number" },
          { "kind": "block", "type": "math_arithmetic" },
          { "kind": "block", "type": "math_single" },
          { "kind": "block", "type": "math_trig" },
          { "kind": "block", "type": "math_number_property" },
          { "kind": "block", "type": "math_on_list" },
          { "kind": "block", "type": "math_round" }
        ]
      },
      {
        "kind": "category",
        "name": "Texto",
        "colour": "#5ba58c",
        "contents": [
          { "kind": "block", "type": "text" },
          { "kind": "block", "type": "text_print" },
          { "kind": "block", "type": "text_join" },
          { "kind": "block", "type": "text_length" },
          { "kind": "block", "type": "text_isEmpty" },
          { "kind": "block", "type": "text_indexOf" },
          { "kind": "block", "type": "text_charAt" },
          { "kind": "block", "type": "text_getSubstring" },
          { "kind": "block", "type": "text_changeCase" },
          { "kind": "block", "type": "text_trim" },
          { "kind": "block", "type": "text_count" },
          { "kind": "block", "type": "text_replace" },
          { "kind": "block", "type": "text_reverse" },
          { "kind": "block", "type": "text_print" }

        ]
      },
      {
        "kind": "category",
        "name": "Listas",
        "colour": "#745ba5",
        "contents": [
          { "kind": "block", "type": "lists_create_empty" },
          { "kind": "block", "type": "lists_create_with" },
          { "kind": "block", "type": "lists_repeat" },
          { "kind": "block", "type": "lists_length" },
          { "kind": "block", "type": "lists_isEmpty" },
          { "kind": "block", "type": "lists_indexOf" },
          { "kind": "block", "type": "lists_getIndex" },
          { "kind": "block", "type": "lists_setIndex" },
          { "kind": "block", "type": "lists_getSublist" },
          { "kind": "block", "type": "lists_split" },
          { "kind": "block", "type": "lists_sort" }
        ]
      },
      {
        "kind": "category",
        "name": "Funções",
        "colour": "#995ba5",
        "contents": [
          { "kind": "block", "type": "procedures_defnoreturn" },
          { "kind": "block", "type": "procedures_defreturn" },
          { "kind": "block", "type": "procedures_callnoreturn" },
          { "kind": "block", "type": "procedures_callreturn" }
        ]
      },
      {
        "kind": "category",
        "name": "Variáveis",
        "colour": "#a55b80",
        "custom": "VARIABLE"
      }
    ]
  };

  const workspace = Blockly.inject('blockly-editor-canva', {
    toolbox: toolbox,
    scrollbars: true,
    trashcan: true
  });

  var boardStart = $('.board').clone();
  $('#run-code').click(() => {
    // Gera o código em JavaScript
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    
    // Tenta executar o código gerado
    try {
      $('.board').replaceWith(boardStart.clone());
      var campoMinado = new CampoMinado();

      console.log(code);
      eval(code);

      const gameStatus = campoMinado.JogoStatus();
      let gameStatusMessage = '' ;
      switch(gameStatus) {
        case 0:
          gameStatusMessage =  'Jogo em aberto, continue procurando as casas que não possuem bombas.';
          break;
        case 1:
          gameStatusMessage =  'Vitoria, você encontrou todas as casas que não possui bomba.';
          break;
        default:
          gameStatusMessage =  'Game Over, você encontrou uma bomba.';
      }
      $('#output').text(`${gameStatusMessage}`);
    } catch (err) {
      $('#output').text(`Erro: ${err}`);
    }
  });

  $('#save-code').click(() => {
    saveWorkspace();
  });

  $('#export-code').click(() => {
    exportWorkspace();
  });

  $('#import-code').click(() => {
    importWorkspace();
  });

  function loadWorkspace() {
    let xmlText = localStorage.getItem("minesweeperWorkspace");

    if (xmlText) {
        // Converte o texto de volta para XML
        let xml = Blockly.utils.xml.textToDom(xmlText);

        // Limpa o workspace atual
        workspace.clear();

        // Carrega o XML no workspace
        Blockly.Xml.domToWorkspace(xml, workspace);
        console.log("Workspace restaurado!");
    } else {
        console.log("Nenhum workspace salvo encontrado.");
    }
  }

  function saveWorkspace() {
    // Converte o workspace para XML
    let xml = Blockly.Xml.workspaceToDom(workspace);

    // Serializa o XML para uma string
    let xmlText = Blockly.Xml.domToPrettyText(xml);

    // Armazena no Local Storage (ou envia para um servidor)
    localStorage.setItem("minesweeperWorkspace", xmlText);
    console.log("Workspace salvo!");
    alert('Código salvo com sucesso!')
  }

  function exportWorkspace() {
    // Obtém o workspace atual do Blockly
    let workspace = Blockly.getMainWorkspace();

    // Converte o workspace para XML
    let xml = Blockly.Xml.workspaceToDom(workspace);

    // Serializa o XML para uma string
    let xmlText = Blockly.Xml.domToPrettyText(xml);

    // Cria um blob para salvar o conteúdo
    let blob = new Blob([xmlText], { type: "text/xml" });

    // Cria um link de download
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ivoryit-teste-campo-minado.xml"; // Nome do arquivo exportado
    link.click();

    console.log("Workspace exportado!");
  }

  function importWorkspace() {
    // Obtém o arquivo selecionado pelo usuário
    let input = document.getElementById("importFile");
    if (input.files.length === 0) {
        alert("Por favor, selecione um arquivo para importar.");
        return;
    }

    let file = input.files[0];
    let reader = new FileReader();

    // Lê o conteúdo do arquivo
    reader.onload = function (event) {
        let xmlText = event.target.result;

        try {
            // Converte o texto XML para um objeto DOM
            let xml = Blockly.utils.xml.textToDom(xmlText);

            // Obtém o workspace atual do Blockly
            let workspace = Blockly.getMainWorkspace();

            // Limpa o workspace atual
            workspace.clear();

            // Restaura o workspace a partir do XML
            Blockly.Xml.domToWorkspace(xml, workspace);

            console.log("Workspace importado com sucesso!");
            alert('Código importado com sucesso!');
        } catch (error) {
            console.error("Erro ao importar o workspace:", error);
            alert("O arquivo selecionado não é válido.");
        }
    };

    // Lê o arquivo como texto
    reader.readAsText(file);
  }

  loadWorkspace();
})();
