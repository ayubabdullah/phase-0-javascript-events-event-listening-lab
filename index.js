const button = document.querySelector('#button');
function addingEventListener() {
    button.addEventListener('click', (event) => {
        alert('I was clicked!');
    });
}
