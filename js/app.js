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
    for(let i  =0; i < length ; i++)
    {
        messageText = isInViewport(sections[i]);
        if(messageText)
        {
            sections[i].parentElement.classList.add('your-active-class');
            if(i != 0){sections[i-1].parentElement.classList.remove('your-active-class');}
        }
    }
} 
