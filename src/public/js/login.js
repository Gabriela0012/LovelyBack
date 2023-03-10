const form = document.getElementById('loginForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(form);
  let object = {};
  console.log(object);
  data.forEach((value,key)=>object[key] = value);
  fetch('api/sessions/login',{
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(result => result.json()).then(json =>{
    console.log(json);
    if(json.status==="success"&&json.payload==='user'){
      window.location.replace('/')
    }else if(json.status==="success"&&json.payload==='admin'){
      window.location.replace('/homeAdmin')
    }else{
      window.location.replace('/loginFail')
    }

  });
})
