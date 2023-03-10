const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', saveOrderInDatabase)


function saveOrderInDatabase(){
  
  const shoppingCart = localStorage.getItem('shoppingCart')
  const email = document.getElementById('email-element').value


  const dataToSend = {
    email: email,
    items: JSON.parse(shoppingCart)
  }

  fetch('/api/orders',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend)

  }).then(function (result){
    return result.json();
  }).then((res)=> console.log(res)).then((shoppingCartItemsContainer.innerHTML=''))


  updateShoppingCartTotal();
  modal.classList.remove('modal--show')

}