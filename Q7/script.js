document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const type = document.getElementById('type').value;
    const likes = document.getElementById('likes').value;
    const pet = {
        name: name,
        age: age,
        weight: weight,
        type: type,
        likes: likes
    };
    console.log('Pet Object:', pet);
    console.log('JSON:', JSON.stringify(pet));
});