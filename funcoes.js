function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}


function obterDadosHtml(nome)
{
    return HtmlService.createHtmlOutputFromFile(nome).getContent();
}