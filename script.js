// Grab the form element
const form = document.getElementById('userForm');

// Add event listener for form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Simple front-end validation
  if (!name || !email) {
    document.getElementById('message').innerText = 'Please fill out both fields.';
    return;
  }

  try {
    // Send form data to the back-end API using Fetch
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById('message').innerText = 'User added successfully!';
    } else {
      document.getElementById('message').innerText = `Error: ${result.error}`;
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('message').innerText = 'Something went wrong!';
  }
});
