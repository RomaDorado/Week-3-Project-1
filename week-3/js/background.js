class Background {
    constructor(ctx, backgroundWidth, backgroundHeight, backgroundImage) {
        this.ctx = ctx
        //         this.backgroundPos = {
        //             x: backgroundPosX,
        //             y: backgroundPosY
        //         }
        this.backgroundSize = {
            w: backgroundWidth,
            h: backgroundHeight
        }

        this.image = backgroundImage,
        this.backgroundInstance = undefined
    }
//         this.imageName = backgroundImage;
//         this.backgroundInstance = undefined //'images/road.png';
//         this.image = new Image();
//         this.image.src = imgSource;

//         this.init()

//     }

    draw(){
        this.ctx.backgroundImage(this.image, this.backgroundWidth, this.backgroundHeight);
    }


    init() {
        this.backgroundInstance = new Image()
        this.backgroundInstance.src = `images/${this.imageName}`
    }

//     draw() {
//         this.ctx.drawImage(this.imageInstance, this.backgroundPos.x, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
//     }
}
