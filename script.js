const certificateForm = document.getElementById('certificateForm');
const certificateContainer = document.getElementById('certificateContainer');

certificateForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;

  try {
    const response = await fetch('/certificates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, course })
    });
    const data = await response.json();
    certificateContainer.innerHTML = data.certificate;
  } catch (err) {
    console.error(err);
  }
});
