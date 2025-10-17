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