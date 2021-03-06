import Canvas from './Canvas.js';
import Menu from './Menu.js';
import Player from './Player.js';

const root = document.querySelector('.wrap');
const path = 'path("m 15 35 c -59 -41 -56 -56 -93 -27 c -46 23 -57 30 -81 47 c -19 11 -41 24 -70 18 c -84 -33 -60 -23 -82 -33 c -10.7 -7 -30 -18 -25 -29 c 7 -21 39 -22 35 -33 c -11 -20 -20 -30 -11 -41 c 11 -13 31 -23 48 -30 c 22 -17 45 -19 66 -47 c 9 -22 -28 -38 -61 -63 c -30 -21 -76 -33 -15 -73 c -15 -17 17 -49 43 -21 c 14 12 18 16 38 38 c 9 7 16 21 44 19 c 25 -18 18 -37 8 -61 c -16 -42 22 -11 43 -17 c 14 -10 -9 -9 37 -39")';

const offsetDistanceArray = [9, 7, 7.5, 7.0, 8, 6.5, 6.5, 8.5, 7.5, 9.5, 5.5, 5.5, 8, 5];
let count = 0;
let offsetDistance = 0;

const canva = new Canvas(root, "960", "630", "src/images/background/map.png").createCanvas();
const player = new Player(root,"src/images/icons/girl.png", "460", "420", path);
player.createPlayer ();

const menu = new Menu(root).createMenu();
document.querySelector(".university-button").addEventListener("click", ()=>{
    offsetDistance += offsetDistanceArray[count];
    player.move(offsetDistance);
    count ++;
});
