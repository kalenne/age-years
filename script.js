const progress = document.getElementById('progress');
const preview = document.getElementById('preview');
const next = document.getElementById('next');


let currentActive = 1; /* deixar o primeiro como default */

const circles = document.getElementById('progress-container');

function createDivs() {
    for(let i=1; i<=10; i++){
        const div = document.createElement('div');
        div.classList.add('circle');
        div.innerText = i * 10;
        circles.appendChild(div);
    }
}

next.addEventListener('click', ()=>{
    const circle = document.querySelectorAll('.circle');
    currentActive++;

    if(currentActive > circle.length){
        currentActive = circle.length
    }
    update();
})

preview.addEventListener('click', ()=>{
    const circle = document.querySelectorAll('.circle');
    currentActive--;

    if(currentActive < 1){
        currentActive = 1
    }
    
    update();
})

function update(){
    const circle = document.querySelectorAll('.circle');
    circle.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document. querySelectorAll ('.active');

    progress.style.width = ( (actives.length-1) /(circle.length-1)) * 100 +"%";

    if(currentActive === 1){ /* === é igualado pelo tipo e valor*/
        preview.disabled = true;
    } else if (currentActive === circle.length){
        next.disabled = true;
    } else {
        preview.disabled = false;
        next.disabled = false;
    }
}