const FOLHA = SpreadsheetApp.openById('1sHpJLRY47dqmYNVvVgLDdDeree61VXQ3nRw2usVa1TI').getActiveSheet();

function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(dados)
{
    inserirContato(dados.parameter.nome, dados.parameter.email);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obterDadosHtml(nome)
{
    return HtmlService.createHtmlOutputFromFile(nome).getContent();
}


function obterContatos()
{
    return FOLHA.getDataRange().getValues();
}

function inserirContato(nome, sobrenome, email, telef)
{
    FOLHA.appendRow([nome, sobrenome, email, telef]);
}

function apagarContato(numFila)
{
    FOLHA.deleteRow(numFila);
}

function editarContato(numFila, dados)
{
    // numFila é o número da linha na planilha (1-based)
    let celulas = FOLHA.getRange(numFila, 1, 1, 4); // linha, coluna A=1, 1 linha, 4 colunas (A:D)
    celulas.setValues([[dados.nome, dados.sobrenome, dados.email, dados.telef]]);
}