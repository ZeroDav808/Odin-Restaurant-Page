import './styles.css';
import { loadHome } from './home';
import burgerImage from "../burger.webp"; // Correct import path
import { loadContact} from './contact';
import { loadMenu } from './menu';

console.log('Hello, world');
loadHome();

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const content = document.querySelector('#content');
const navBar = document.querySelector('#nav-container');
let currentNode = null;

navBar.addEventListener('click', (e)=> {
   const eventName = e.target.id;

   if(eventName === 'home'){
    content.innerHTML = "";
    loadHome();
   } else if(eventName === 'contact'){
    content.innerHTML = "";
    loadContact();
   }else if(eventName === 'menu'){
    loadMenu();
   }
})





export { burgerImage };