const form = document.getElementById('registerForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(form);
  console.log(JSON.stringify(data));

  fetch('api/sessions/register',{
    method: 'POST',
    body: data
  }).then(result => result.json()).then(json =>{
    console.log(json);
    form.reset();
  });
})