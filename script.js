// Adicione mais lógica conforme necessário
document.addEventListener('click',function(search){
    if(search.target.closest(global)){
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
    }
  })