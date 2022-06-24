let list = document.querySelectorAll('li');
let firstKeyIndex, lastKeyIndex;

for (let i = 0; i < list.length; i++) {
    let checkbox = document.getElementById(`episode-${i + 1}`);
    checkbox.addEventListener('click', (event) => handleCheck(event, i));
}

function handleCheck(e, i) {
    if (!e.shiftKey) {
        firstKeyIndex = i;
    }
    if (e.shiftKey) {
        lastKeyIndex = i;
        fillBetweenCheckboxes(firstKeyIndex, lastKeyIndex);
    }
}

function fillBetweenCheckboxes(firstKeyIndex, lastKeyIndex) {
    if (firstKeyIndex > lastKeyIndex) {
        let temp = firstKeyIndex;
        firstKeyIndex = lastKeyIndex;
        lastKeyIndex = temp;
    }
    for (let i = firstKeyIndex; i <= lastKeyIndex; i++) {
        let checkbox = document.getElementById(`episode-${i + 1}`);
        checkbox.checked = true;
    }
}
