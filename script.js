document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const name2 = document.getElementById('name2').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, name2 })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = 'Data submitted successfully!';
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error submitting data.';
    });
});
