export default class Player {
    constructor (root, imageUrl, top, left, path) { 
        this.root = root;
        this.player = null;
        this.imageUrl = imageUrl;
        this.path = path;
        this.top = top;
        this.left = left;
    }

    setStartPosition () {
        this.player.style.top = this.top + "px";  
        this.player.style.left = this.left + "px";  
    }

    setPlayerPath () {
        this.player.style.offsetPath = this.path; 
    }

    createPlayerIcon () {
        const player = new Image(20, 70);
        player.src = this.imageUrl;
        player.classList.add("player");
        this.player = player;
        player.style.offsetPath = this.path;
        this.root.append(player)
    }

    move (offsetDistance) {
        this.player.style.offsetDistance = offsetDistance + "%";
    }

    createPlayer () {
        this.createPlayerIcon ();
        this.setStartPosition ();
        this.setPlayerPath ();
    }
}
