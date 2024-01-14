document.addEventListener('DOMContentLoaded', function () {
  const carne = document.getElementById('preferenciaCarnes');
  const arrowUp = document.querySelector('.arrowup');
  const arrowDown = document.querySelector('.arrowdown');

  if (carne && arrowUp && arrowDown) {
    carne.addEventListener('focus', function () {
      arrowUp.classList.add('active');
      arrowDown.classList.remove('active');
    });

    carne.addEventListener('blur', function () {
      arrowUp.classList.remove('active');
      arrowDown.classList.add('active');
    });
  } else {
    console.error("Elementos não encontrados.");
  }
});


  function initMap() {
    const maspLocation = { lat: -23.56152778467835, lng: -46.65256538548842 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15, 
      center: maspLocation,
    });


    const marker = new google.maps.Marker({
      position: maspLocation,
      map: map,
      title: "MASP - Museu de Arte de São Paulo Assis Chateaubriand",
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
   
    let radioButtons = document.querySelectorAll('.preferencias input[type="radio"]');
    let formulario = document.querySelector('form');
  
   
    formulario.addEventListener('submit', function(event) {
      
      let peloMenosUmSelecionado = Array.from(radioButtons).some(button => button.checked);
  
      
      if (!peloMenosUmSelecionado) {
        alert('Por favor, selecione pelo menos uma preferência.');
        event.preventDefault(); 
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const todosCheckbox = document.getElementById('todos');
    const emailCheckbox = document.getElementById('email');
    const smsCheckbox = document.getElementById('sms');
  
    todosCheckbox.addEventListener('click', function () {
      todosCheckbox.checked;
      emailCheckbox.checked;
      smsCheckbox.checked;
  
   
      updateTodosCheckboxStyle();
    });
  
    emailCheckbox.addEventListener('click', function () {
      todosCheckbox.checked = false;
      updateTodosCheckboxStyle();
    });
  
    smsCheckbox.addEventListener('click', function () {
      todosCheckbox.checked = false;
      updateTodosCheckboxStyle();
    });
  
    function updateTodosCheckboxStyle() {
     
      if (todosCheckbox.checked) {
        todosCheckbox.firstChild.classList.add('custom-checkbox-checked');
      } else {
        todosCheckbox.firstChild.classList.remove('custom-checkbox-checked');
      }
  
      if (emailCheckbox.checked || smsCheckbox.checked) {
        todosCheckbox.firstChild.classList.add('custom-checkbox-checked-meios-todos');
      } else {
        todosCheckbox.firstChild.classList.remove('custom-checkbox-checked-meios-todos');
      }
    }
  
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    const formulario = document.querySelector('form');
  
    formulario.addEventListener('submit', function (event) {
      let peloMenosUmSelecionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
      if (!peloMenosUmSelecionado) {
        alert('Por favor, selecione pelo menos uma preferência de contato.');
        event.preventDefault(); 
      }
    });
  });
  
  function checkAll(checkbox) {
    const checkboxes = document.querySelectorAll('.preferenciaContato .custom-checkbox');
    checkboxes.forEach(cb => {
      cb.checked = checkbox.checked;
    });

    updateCheckboxStyle();
  }

  function checkMeios(checkbox) {
    const todosCheckbox = document.getElementById('todos');
    todosCheckbox.checked = false;

    updateCheckboxStyle();
  }

  function updateCheckboxStyle() {
    const todosCheckbox = document.getElementById('todos');
    const emailCheckbox = document.getElementById('email');
    const smsCheckbox = document.getElementById('sms');

    emailCheckbox.parentNode.style.content = emailCheckbox.checked ? '✔️' : '—';
    smsCheckbox.parentNode.style.content = smsCheckbox.checked ? '✔️' : '—';
    todosCheckbox.parentNode.style.content = todosCheckbox.checked ? '✔️' : '—';
  }
 

  function formatarTelefone() {
    const telefoneInput = document.getElementById('telefone');
    let numeroTelefone = telefoneInput.value.replace(/\D/g, '');

    if (numeroTelefone.length >= 2) {
      numeroTelefone = `(${numeroTelefone.substring(0, 2)})${numeroTelefone.substring(2)}`;
    }

    if (numeroTelefone.length >= 10) {
      numeroTelefone = `${numeroTelefone.substring(0, 9)}-${numeroTelefone.substring(9)}`;
    }

    telefoneInput.value = numeroTelefone;
  }