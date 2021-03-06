export default class Canvas {
    constructor (root, width, height, backgroundUrl) {
        this.root = root;
        this.width = width;
        this.height = height;
        this.backgroundUrl = backgroundUrl;
        this.canvas = null;
        this.context  = null;
        this.backgroundImge = null;
    }

    createCanvas () {
        const canvas = document.createElement('canvas');
        this.canvas = canvas;
        canvas.id     = "canvas";
        canvas.width  = this.width;
        canvas.height = this.height;
        this.root.append(canvas);
        this.addBackgroundImage ();
    }

    addBackgroundImage () {
        const ctx = this.canvas.getContext('2d');
        const image = new Image(this.width, this.height);
        image.onload = function() {
            ctx.drawImage(image, 0, 0, this.width, this.height);
        }
        image.src = this.backgroundUrl;
        this.backgroundImge = image;
    }

    createPlayerIcon () {
        const ctx = this.canvas.getContext('2d');
        this.context = ctx
        const player = new Image(20, 70);
        player.onload = () => {
            ctx.drawImage(player, 450, 425);
        }
        player.src = "src/images/icons/girl.png";
        this.player = player;
    }

    move(point){
        this.x = point.x;
        this.y = point.y;
        console.log(this.x + "/" + this.y)
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.context.drawImage(this.backgroundImge,  0, 0);
        this.context.drawImage(this.player,  this.x, this.y);
    }

}