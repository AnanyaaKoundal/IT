var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            var tbody = document.getElementById('pets-container');
            data.forEach(item => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <div class="card">
                    <h2>${item.name}</h2>
                    <p>Age: ${item.age}</p>
                    <p>Weight: ${item.weight}</p>
                    <p>Type: ${item.type}</p>
                    <p>Likes: ${item.likes}</p>
                    </div>
                    `;
                tbody.appendChild(card);
            })
        }
    }
}

xhttp.open("GET", "petData.json", true);
xhttp.send();