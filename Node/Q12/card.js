var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            var tbody = document.getElementById('card_show');
            console.log(data);
            data.forEach(item => {
                var div = document.createElement('div');
                div.className="col-md-4";
                div.innerHTML = `
                <div class="card">
                <img src=${item.img} class="card-img-top" alt="Card 1" width="300px" height="500px">
                <div class="card-body">
                <h5 class="card-title">${item.book_name}</h5>
                <p class="card-text">~ ${item.author}</p>
                </div>
                `;
                tbody.appendChild(div);
            });
        } else {
            console.error('Error:', this.status);
        }
    }
};

xhttp.open("GET", "/cardjson", true);
xhttp.send();