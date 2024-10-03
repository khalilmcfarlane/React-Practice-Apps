function printArray(arr) {
    const root = document.getElementById('id');
    arr.forEach(elem => {
        root.innerHTML += elem;
    });
}

export default Array;