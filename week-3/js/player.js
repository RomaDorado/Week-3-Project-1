class Player {
    constructor(window, ctx, mouseWidth, mouseHeight, mouseImage, canvasWidth, canvasHeight) {

        this.window = window
        this.ctx = ctx
        this.mousePos = {
            x: 0,
            y: 0
        }

        this.mouseSize = {
            w: mouseWidth,
            h: mouseHeight,
        },

        this.canvasSize = {
            w: canvasWidth,
            h: canvasHeight

        },

        this.imageName = mouseImage
        this.mouseInstance = undefined
        this.init()

    }
    init() {
        this.mouseInstance = new Image()
        this.mouseInstance.src = `images/${this.imageName}`
        this.setEventListeners()
        this.attack()
    }

    setEventListeners() {
        document.addEventListener('mousemove', (evt) => {
            this.mousePos.x = evt.pageX;
            this.mousePos.y = evt.pageY;
        }, false);
    }

    createCursor() {
        this.ctx.strokeStyle = '#0f0';
        this.ctx.beginPath();
        this.ctx.arc(this.mousePos.x, this.mousePos.y, 12, 0, Math.PI * 2, true);
        this.ctx.stroke();
    }

    attack() {
        gameApp.onclick = e => {
            if (this.mousePos.x < this.enemies.enemiesPos.x + this.enemies.enemiesSize.w &&
                this.mousePos.x + this.mousePos.w > this.enemies.enemiesPos.x &&
                this.mousePos.y < this.enemies.enemiesPos.y + this.enemies.enemiesSize.h &&
                this.mouseSize.h + this.mousePos.y > this.enemies.enemiesPos.y) {
                alert ('BEAT 1')
            }
            if (this.mousePos.x < this.obstacle.obstaclePos.x + this.obstacle.obstacleSize.w &&
                this.mousePos.x + this.mousePos.w > this.obstacle.obstaclePos.x &&
                this.mousePos.y < this.obstacle.obstaclePos.y + this.obstacle.obstacleSize.h &&
                this.mouseSize.h + this.mousePos.y > this.obstacle.obstaclePos.y) {
                alert ('BEAT 2')
            }
        }
    }
}

