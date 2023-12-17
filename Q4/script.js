const table = document.getElementById('multiplicationTable');
let currentRow = 2;

function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

const intervalId = setInterval(() => {
    if (currentRow <= 10) {
        let row = table.insertRow();
        for (let i = 1; i <= 10; i++) {
            let cell = row.insertCell();
            cell.textContent = `${currentRow} x ${i} = ${currentRow * i}`;
        }
        currentRow++;
        row.style.fontSize = '25px';
        row.style.color = getRandomColor();
    } else {
        clearInterval(intervalId);
    }
}, 5000);

/* const intervalID = setInterval(()=>{
    if(cur<=10){
        let row=table.insertRow();
        for(let i=1; i<=10; i++){
            let cell=row.insertCell();
            cell.textContent =`${cur} x ${i} = ${cur*i}`;
        }
        cur++;
        row.style.fontSize = `${15+cur}px`;
        row.style.color = color();
    }else{
        clearInterval(intervalID);
    }
}, 1000);*/