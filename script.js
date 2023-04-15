const countEl = document.getElementById("count-el");

const increBtn = document.getElementById("increment-btn");

const saveBtn = document.getElementById("save-btn");

const preEntries = document.getElementById("save-el");

let count = 0;

increBtn.addEventListener("click", increment);

saveBtn.addEventListener("click", save);

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
			let newCount = count + "-";
    preEntries.innerText += newCount;
    countEl.innerText = 0;
    count = 0;
}
