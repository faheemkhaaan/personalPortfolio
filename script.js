
let portfolioPage
let blogPage
const skillsSection  = document.getElementById("skillsSection");
const feedbackSection = document.getElementById("feedbackSection");
const skillsInfo = [
    {
        img: './images/html-logo-png-3.png',
        title: 'HTMl'
    },
    {
        img: './images/css.png',
        title: 'Css'
    },
    {
        img: './images/tailwind-css-icon.webp',
        title: 'Tailwind css'
    },
    {
        img: './images/javascript-logo-7539.png',
        title: 'JavaScript'
    },
    {
        img: './images/react-1-logo.png',
        title: 'React'
    },
    {
        img: './images/node_js.webp',
        title: 'NodeJs'
    },
    {
        img: './images/express.png',
        title: 'Express'
    },
    {
        img: './images/mongoDb.png',
        title: 'MongoDb'
    },
]

const projectInfo = [
    {
        img: `./images/desktop-preview-1.jpg`,
        title: `Newsletter
        Sign up page`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: 'https://faheemkhaaan.github.io/frontendMentor_NewsletterChallenge/',
    },
    {
        img: `./images/desktop-preview-2.jpg`,
        title: `Crowdfunding
        landing page`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: 'https://faheemkhaaan.github.io/frontendMentor_Crowdfunding-product-page/',
    },
    {
        img: `./images/desktop-preview-3.jpg`,
        title: `Product
        Card Preview`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: 'https://faheemkhaaan.github.io/frontendMentor_product-review-page_Challenge/',
    },
    {
        img: `./images/desktop-preview-4.jpg`,
        title: `Advice
        Genrator App`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: 'https://faheemkhaaan.github.io/frontendMentor_Advice-genrator-app_Challenge/',
    },
    {
        img: `./images/desktop-preview-5.jpg`,
        title: `Interactive Card details`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_Interactive-Card_Challenge/',
    },
    {
        img: `images/desktop-preview-6.jpg`,
        title: `Age Calculator App`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_Age-calculator_Challenge/',
    },
    {
        img: `images/desktop-preview-7.jpg`,
        title: `Time Tracking Dashboard`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_Intro-component-with-sign-up-form_Challenge/',
    },
    {
        img: `images/desktop-preview-8.jpg`,
        title: `Intro Commponent wiht sign up form`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_Time-tracking-dashboard_Challenge/',
    },
    {
        img: `images/desktop-preview-9.jpg`,
        title: `Base Apparel Comming Soon page`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_Base-apparel_Challenge/',
    },
    {
        img: `images/desktop-preview-10.jpg`,
        title: `Tip Calculator`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_Tip-calculator-app_Challenge/',
    },
    {
        img: `images/desktop-preview-11.jpg`,
        title: `Calculator`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: ' https://faheemkhaaan.github.io/frontendMentor_calculator_Challenge/',
    },
    {
        img: `images/desktop-preview-12.jpg`,
        title: ` Ecommerce Product page`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae suscipit
        architecto vel quo provident autem temporibus corporis quas maiores veniam`,
        link: 'https://faheemkhaaan.github.io/frontendMentor_Ecommerce-product-page_Challenge/',
    },
   
]
const addresss = '/personalPortfolio/index.html'
if (window.location.pathname !== '/index.html') {
    portfolioPage = 'text-white'
    blogPage = 'text-orange-600'

} else {
    imgAddress = `./images/myProfile.png`
    portfolioPage = 'text-orange-600'
    blogPage = 'text-white'
    
    createSkills();
    createProjects();
}

function createSkills() {
    const skills = document.getElementById('allSkills');
    const totalSkills = skillsInfo.map((skill) => {
        return `<div
        class="w-[100px] h-[100px] bg-orange-600 flex justify-center items-center text-white  rounded-full relative group">
        <img src="${skill.img}" alt="" class="w-[80px] h-[80px] object-contain ">
        <p class="group-hover:translate-y-6 -z-10 duration-200 group-hover:text-black absolute bottom-0 font-bold">${skill.title}</p>
    </div>`
    })
    skills.innerHTML = `${totalSkills.join('')}`
}
function createProjects(){
    const projectList = document.getElementById('projectList');
    const projects = projectInfo.map((pro)=>{
        return `<div class="w-[300px] h-[250px] bg-blue-600 rounded-md shadow-0xl relative  cursor-pointer">
        <img src="${pro.img}" alt="" class="object-cover w-full h-full">

        <div
            class="absolute inset-0 p-6 bg-gradient-to-t from-cyan-900 to-blue-50  z-10 opacity-0 hover:opacity-100 duration-300">
            <h2 class="py-2 text-2xl font-semibold"><a
                    href="${pro.link}">Newsletter
                    Sign up page</a></h2>
            <p class="">
                <a href="${pro.link}"> ${pro.description} </a>
            </p>
        </div>
    </div>`
    });

    projectList.innerHTML = `${projects.join('')}`
}
const body = document.body
function createFooter() {
    return `<div class="sm:h-[60vh] h-max flex sm:flex-row flex-col-reverse justify-between items-center py-5 px-8 my-10">
    <div class="sm:w-[50%] w-full h-full" id="footerTitle">
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

function createHeader() {
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
                    class="px-4 py-3   rounded-md  hover:text-orange-600 hover:rounded-md duration-100">
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#" onclick="scrollIntoSection('projectListTitle')" class="px-4 py-3  hover:text-orange-600 hover:rounded-md duration-100">
                    My Projects
                </a>
            </li>
            <li>
                <a href="#" onclick="scrollIntoSection('feedbacksTitle')" class="px-4 py-3  hover:text-orange-600 hover:rounded-md duration-100">
                    FeedBacks
                </a>
            </li>

            <li>
                <a href="#" class="px-8 py-3  hover:text-orange-600 duration-100  hidden sm:block" onclick="scrollIntoSection('contactTitle')">
                    Contact Us
                </a>
            </li>

            <li>
                <a href="#" onclick="scrollIntoSection('aboutTitle')" class="px-8 py-3  hover:text-orange-600 duration-100  hidden sm:block"  >
                    About Me
                </a>
            </li>

            <li>
                <a href="#" class="px-8 py-3  hover:text-orange-600 duration-100  hidden sm:block" onclick="scrollIntoSection('footerTitle')" >
                    Join our newsletter
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

hamberger.addEventListener('click', () => {
    navBar.classList.remove('hidden')
    setTimeout(() => {
        navBar.classList.remove("translate-x-80");
    }, 100);
})
closeMenuBtn.addEventListener('click', () => {
    navBar.classList.add("translate-x-80");

    setTimeout(() => {
        navBar.classList.add('hidden');
    }, 700)
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

left.addEventListener('click', () => {
    moveLeft()
    feedbacks()
})
right.addEventListener('click', () => {
    moveRight();
    feedbacks()
})
function moveRight() {
    increment = increment == 0 ? comments.length - 1 : (increment - 1) % comments.length;
    userComment.textContent = comments[increment].comment
    userName.textContent = comments[increment].user
}
function moveLeft() {
    increment = (increment + 1) % comments.length;
    userComment.textContent = comments[increment].comment
    userName.textContent = comments[increment].user
}
function toIndex() {
    userComment.textContent = comments[increment].comment
    userName.textContent = comments[increment].user
}
function feedbacks() {
    commentNumber.textContent = ''
    comments.forEach((_, index) => {
        changeColor = index == increment ? 'bg-orange-600' : 'bg-white';
        const list = createListNumbering(changeColor)

        list.addEventListener('click', () => {
            increment = index
            const children = Array.from(commentNumber.children)
            toIndex()
            children.forEach((child, i) => {
                if (increment === i) {
                    child.className = `w-3 h-3 bg-orange-600 rounded-full cursor-pointer`
                } else {
                    child.className = `w-3 h-3 bg-white rounded-full cursor-pointer`
                }
            })
            console.log(current);

        })
        commentNumber.appendChild(list);
    });
}
function createListNumbering(color) {

    const div = document.createElement("div");

    div.className = `w-3 h-3 ${color} rounded-full cursor-pointer`
    return div;
}
feedbacks()


const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate-[slide_1s_ease-in-out_.1s_1_forwards]');
            observer.unobserve(entry.target);
        }
    })
    console.log(entries);
})
observer.observe(skillsSection);
observer.observe(projectList)

console.log(observer);


function scrollIntoSection(sectionId){
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'})
    console.log(section);
}