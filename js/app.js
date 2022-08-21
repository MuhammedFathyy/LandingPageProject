/* Declaration of Helping functions*/
const sections = document.querySelectorAll('.landing__container');
const navBar = document.querySelector('.navbar__menu');
const addingList = document.createElement('ul');


/* Declaration of global variables */

var length = sections.length;


/* Making dynamic list of the paragraphs in the website */
for(let i = 1; i <= sections.length ; i++)
{

    const newElement = document.createElement('li');
    newElement.innerHTML = `<a id="section--${i}" >Section ${i}</a>`;
    addingList.appendChild(newElement);
}
navBar.appendChild(addingList);



/* Helping function to avoid code duplication */ 


function checkViewPort()
{
    let messageText = false;
    for(let i = 0; i < length ; i++)
    {
        messageText = isInViewport(sections[i]);
        if(messageText)
        {
            sections[i].parentElement.classList.add('your-active-class');
            if(i != 0){sections[i-1].parentElement.classList.remove('your-active-class');}
        }
    }
} 

function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



/* Listeners functions */

document.addEventListener("scroll", checkViewPort);

document.addEventListener("mousemove", checkViewPort);

for(let i =0; i< length ; i++)
{  
    addingList.children[i].addEventListener('click' , function()
    {
        sections[i].scrollIntoView({behavior : "smooth" , block : "center"});
        

    })
    
}


document.addEventListener("scroll", function()
{
    navBar.style.display = "none";
})

document.addEventListener("mousemove" , function(event)
{
    if(event.clientY <= 100)
        navBar.style.display = "block";
    else{
        navBar.style.display = "none";
    }
})

