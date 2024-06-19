import { createInformation } from "./info";
import { createMenu } from "./menu";
import { createAbout } from "./about";
import './style.css';

createInformation();
document.getElementById('home').addEventListener('click', createInformation);
document.getElementById('menu').addEventListener('click', createMenu);
document.getElementById('about').addEventListener('click', createAbout);