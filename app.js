//page1
let size = 16

function makeYesBigger(){
    const yesbtn = document.getElementById('yesbtn');
    size += 60;
    yesbtn.style.fontSize = size + 'px'
}    
// page 2
const q1 = document.getElementsByClassName('q1')[0];

if (q1) {
    setTimeout(function () {
        q1.innerHTML = `
            <h1 style='font-size: 100px; color: white;'>It's you</h1>
            <video src='hamster.mp4' autoplay loop muted style='width: 300px; border-radius: 12px;'></video>
            <a href="page3.html"><button style='margin-top: 20px;'>continue =></button></a>
        `;
    }, 4000);
}