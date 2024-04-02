const hamberger = document.getElementById('hamburger');
const closeMenuBtn = document.getElementById("closeMenuBtn");
const navBar = document.getElementById("navBar");

const showSkills = document.getElementById('showSkills')
const allSkills = document.getElementById("allSkills");
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


// showSkills.onclick = function(){
//     const children = allSkills.children

//     toggleClasses(children[0],'translate-x-[-200px]','translate-y-[35px]','-rotate-[25deg]');
//     toggleClasses(children[1],'translate-x-[-150px]','translate-y-[20px]','-rotate-[20deg]');
//     toggleClasses(children[2],'translate-x-[-100px]','translate-y-[10px]','-rotate-[15deg]');
//     toggleClasses(children[3],'translate-x-[-30px]','translate-y-[0px]','-rotate-[10deg]');
//     toggleClasses(children[4],'translate-x-[30px]','translate-y-[0px]','rotate-[10deg]');
//     toggleClasses(children[5],'translate-x-[100px]','translate-y-[15px]','rotate-[15deg]');
//     toggleClasses(children[6],'translate-x-[150px]','translate-y-[25px]','rotate-[20deg]');
//     toggleClasses(children[7],'translate-x-[200px]','translate-y-[40px]','rotate-[25deg]');
// }

// function toggleClasses(child,transX,transY,rotate){
//     child.classList.toggle(transX);
//     child.classList.toggle(transY);
//     child.classList.toggle(rotate);
// }


const comments = [
    {
        id: 1,
        user: 'Amjad',
        comment: 'Amazing Work done by Faheem khan. I got a recommendation by my friend that is person is talented and will make you a great website. I was in need of a personal portfolio website and I am very happy about the result.'
    },
    {
        id: 2,
        user: 'Shamsher',
        comment: 'I wanted an English Teacher and i want a blog website for content writing and I am very happy that I contacted Faheem khan'
    },
    {
        id: 3,
        user: 'Asif',
        comment: 'This is third  comment'
    },
    {
        id: 4,
        user: 'Shoaib',
        comment: 'This is fourth  comment'
    },
    {
        id: 5,
        user: 'Iqbal',
        comment: 'This is fifth  comment'
    },
]
const userComment = document.getElementById("userComment");
const userName = document.getElementById("userName");
const left = document.getElementById("left");
const right = document.getElementById("right");
const commentNumber = document.getElementById("commentNumber");
let color = 'bg-white';
let increment = 0;
let changeColor



left.onclick = function(){
   moveLeft()
    feedbacks()
}
right.onclick = function(){
   moveRight();
    feedbacks()
}
function moveRight(){
    increment = increment == 0 ? comments.length - 1 : (increment - 1) % comments.length;
    userComment.textContent = comments[increment].comment
    userName.textContent = comments[increment].user
}
function moveLeft(){
    increment = (increment + 1) % comments.length;
    userComment.textContent = comments[increment].comment
    userName.textContent = comments[increment].user
}
function toIndex(){
    userComment.textContent = comments[increment].comment
    userName.textContent = comments[increment].user
}
function feedbacks(){
    commentNumber.textContent = ''
    comments.forEach((_,index)=>{
        changeColor = index == increment ? 'bg-orange-600' : 'bg-white';
        const list = createListNumbering(changeColor)
        
        list.addEventListener('click',()=>{
            increment = index
            const children = Array.from(commentNumber.children)
            toIndex()
            children.forEach((child,i)=>{
                if(increment === i){
                    child.className = `w-3 h-3 bg-orange-600 rounded-full cursor-pointer`
                }else{
                    child.className = `w-3 h-3 bg-white rounded-full cursor-pointer`
                }
            })
            console.log(current);

        })
        commentNumber.appendChild(list);
    });
}
function createListNumbering(color){
    
    const div = document.createElement("div");
   
    div.className = `w-3 h-3 ${color} rounded-full cursor-pointer`
    return div;
}
feedbacks()

