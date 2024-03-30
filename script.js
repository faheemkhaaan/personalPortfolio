const hamberger = document.getElementById('hamberger');
const closeMenuBtn = document.getElementById("closeMenuBtn");
const navBar = document.getElementById("navBar");
const skillsList = document.getElementById('skillsList');
// navBar.style.transform = 'translateX(300px)'

hamberger.onclick = function(){
    navBar.classList.remove('hidden')
    setTimeout(()=>{
        navBar.classList.remove("translate-x-80");
    },100);
}
closeMenuBtn.onclick = function(){
    navBar.classList.add("translate-x-80");

    setTimeout(()=>{
        navBar.classList.add('hidden');
    },700)
}

console.log(skillsList);