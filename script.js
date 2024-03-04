// Adicione mais lógica conforme necessário
document.querySelector('[name="global"]').addEventListener('click',function(){
  const start = document.querySelector('[aria-label="Create a write card"]');
const createCard = document.querySelector('[aria-label="Create new case note"]');
const mouseOverEvent = new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true,
    view: window
});

start.dispatchEvent(mouseOverEvent);

setTimeout(function(){
    createCard.click()
},2000)


setTimeout(function(){
    const textHtml = document.querySelector('[aria-label="Case Note"]');
    textHtml.innerHTML = '<style> body { font-family: Arial, sans-serif; margin: 20px; } .section { margin-bottom: 20px; } h2 { color: #3366cc; } label { font-weight: bold; } </style>  <div class="section"> <h2>Speakeasy ID: ID da Chamada</h2> <p><label>On Call (Call Started) signaled on time?</label> Screenshot capturando o Call Started e a data e hora do computador.</p><p><label>Substatus:</label> Substatus que será marcado no Qplus de acordo com o andamento do caso</p><p><label>Reason/Comments:</label> Breve explicação do porquê da utilização daquele substatus (qual situação levou a escolher ele?)</p><p><label>On Call Comments:</label> Resumo do que aconteceu com a chamada com todos os detalhes e próximos passos</p><p><label>Tags Implemented:</label> Quais tags que foram implementadas</p><p><label>Screenshots:</label> Todos os SS necessários de acordo com o andamento do caso</p><p><label>Multiple CIDs:</label> Se a implementação foi feita em contas diferentes do ADs, adicione aqui os CIDs, se foi em uma única conta não precisa preencher.</p></div>'
},5000)
})
