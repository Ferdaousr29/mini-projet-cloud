document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
  
    fetch('/reserver', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, service })
    })
    .then(res => res.json())
    .then(data => {
      const confirmation = document.getElementById('confirmation');
      confirmation.textContent = data.message;
      confirmation.classList.remove('d-none');
      document.getElementById('reservationForm').reset();
    })
    .catch(error => console.error('Erreur:', error));
  });
  