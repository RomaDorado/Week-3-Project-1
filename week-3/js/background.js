class Background {
    constructor(ctx, backgroundPosX, backgroundPosY, backgroundWidth, backgroundHeight, backgroundImage) {
        this.ctx = ctx
        this.backgroundPos = {
            x: backgroundPosX,
            y: backgroundPosY
        }
        this.backgroundSize = {
            w: backgroundWidth,
            h: backgroundHeight
        }

        this.imageName = backgroundImage;
        this.backgroundInstance = undefined //'images/road.png';

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.backgroundPos.x, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
    }
}
