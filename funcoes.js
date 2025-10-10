function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}


function obterDadosHtml(nome)
{
    return HtmlService.createHtmlOutputFromFile(nome).getContent();
}


function obterContatos()
{
    let folha = SpreadsheetApp.openById('1sHpJLRY47dqmYNVvVgLDdDeree61VXQ3nRw2usVa1TI').getActiveSheet();
    let dados = folha.getDataRange().getValues();
    return dados;
}