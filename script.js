
let portfolioPage 
let blogPage 

if(window.location.pathname !== '/personalPortfolio/index.html'){
    portfolioPage = 'text-white'
    blogPage = 'text-orange-600'

}else{
    imgAddress = `./images/myProfile.png`
    portfolioPage = 'text-orange-600'
    blogPage = 'text-white'
}

console.log(window.location.pathname);
const body = document.body
function createFooter(){
    return `<div class="sm:h-[60vh] h-max flex sm:flex-row flex-col-reverse justify-between items-center py-5 px-8 my-10">
    <div class="sm:w-[50%] w-full h-full">
        <img src="./images/myProfile.png" alt="" class="object-contain w-full h-full">
    </div>
    <div class="p-6 w-[90%] sm:[80%] md:h-[50vh] md:w-[50%]">
        <div class="flex justify-between items-center flex-wrap">
            <p>faheemkhan.pg@gmail.com</p>
            <p>addresss: degree collage pharpur Dik</p>
        </div>
        <h2 class="font-bold text-3xl my-6">Stay Informed,<br> Join our newsletter</h2>
        <form class="my-6">
            <label for="emailNews" class="block">Enter your email</label>
            <div>
                <input type="email" id="emailNews" class="border-black border-b-2 px-4 py-2 outline-none mb-2">
                <button class="px-6 py-2 bg-orange-500 text-white rounded-[100vw]">Submit</button>
            </div>
        </form>
    </div>
</div>`
}

function createHeader(){
    return ` <div class="bg-[#dbb89a] text-white py-5 px-12 relative overflow-x-hidden">
    <div class="absolute left-0 top-2 w-[100vw] h-[3px] bg-white "></div>
    <div class="p-3 flex justify-between">
        <h2 class="text-2xl font-bold">PersnoalPortfolio</h2>
        <div class="sm:hidden" id="hamburger">
            <div class="w-[30px] h-[3px] my-2 bg-white"></div>
            <div class="w-[30px] h-[3px] my-2 bg-white"></div>
            <div class="w-[30px] h-[3px] my-2 bg-white"></div>
        </div>
    </div>
    <nav class="flex justify-between items-center  border-t-2 h-max flex-col gap-5 sm:flex-row">
        <div>
            <i class="fa fa-search cursor-pointer"></i>
            <input class="bg-transparent px-4 py-3 outline-none text-white " type="search" name="search" id="search"
                placeholder="Search">
        </div>
        <ul class="justify-center items-center py-7  gap-1 text-white hidden fixed right-0 top-0 h-[100vh] w-[300px] flex-wrap bg-slate-700 z-10 translate-x-80 duration-300 sm:flex sm:relative sm:h-max sm:w-max sm:bg-transparent sm:p-0 sm:translate-x-0"
            id="navBar">
            <li class="">
                <a href="./index.html"
                    class="px-4 py-3   rounded-md ${portfolioPage} hover:text-orange-600 hover:rounded-md duration-100">
                    Portfolio
                </a>
            </li>
            <li>
                <a href="./blog.html" class="px-4 py-3 ${blogPage} hover:text-orange-600 hover:rounded-md duration-100">
                    Blog
                </a>
            </li>
            <li>
                <a href="" class="px-8 py-3  hover:text-orange-600 duration-100 border-2 hidden sm:block">
                    Contact Us
                </a>
            </li>
            <li class="sm:hidden fixed right-5 top-6 cursor-pointer" id="closeMenuBtn">&Cross;</li>
        </ul>
    </nav>

    <div class="absolute left-0 bottom-2 w-[100vw] h-[3px] bg-white"></div>
</div>
`
}

const header = document.createElement('header');
const footer = document.createElement('footer');

footer.innerHTML = `${createFooter()}`
header.innerHTML = `${createHeader()}`;


body.prepend(header);
body.append(footer);




const hamberger = document.getElementById('hamburger');
const closeMenuBtn = document.getElementById("closeMenuBtn");
const navBar = document.getElementById("navBar");

const showSkills = document.getElementById('showSkills')
const allSkills = document.getElementById("allSkills");
// navBar.style.transform = 'translateX(300px)'

hamberger.addEventListener('click',() =>{
    navBar.classList.remove('hidden')
    setTimeout(()=>{
        navBar.classList.remove("translate-x-80");
    },100);
})
closeMenuBtn.addEventListener('click',()=>{
    navBar.classList.add("translate-x-80");

    setTimeout(()=>{
        navBar.classList.add('hidden');
    },700)
})


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
        user: 'Ikram',
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



left.addEventListener('click',()=>{
    moveLeft()
    feedbacks()
})
right.addEventListener('click',()=>{
    moveRight();
    feedbacks()
}) 
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
