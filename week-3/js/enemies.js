class Enemies {
    constructor(ctx, canvasSize, posX, posY, enemiesWidth, enemiesHeight, speed, image) {
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.enemiesPos = {
            x: posX,
            y: posY
        }
        this.enemiesSize = {
            w: enemiesWidth,
            h: enemiesHeight
        }
        this.speed = speed
        this.imageName = image
        this.ctx = ctx
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
        this.draw()
    }

    draw() {
        this.moveEnemies()
        this.ctx.drawImage(this.imageInstance, this.enemiesPos.x, this.enemiesPos.y, this.enemiesSize.w, this.enemiesSize.h)
    }

    moveEnemies() {
        //alert('alerta de enemies')
        if (this.enemiesPos.y >= this.canvasSize.w - this.enemiesSize.w) {
            this.speed *= -1
        }

        if (this.enemiesPos.y < 0) {
            this.speed *= -1
        }

        if (this.enemiesPos.y >= this.canvasSize.w - this.enemiesSize.w || this.enemiesPos.y < 0) {
            this.changeDirection()
        }

        this.enemiesPos.y += this.speed
    }

    changeDirection() {
        this.speed *= -1
    }

    draw(framesCounter) {
    
        this.ctx.drawImages(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames), 0, 
            math.floor(this.image.width / this.image.frames),
            this.image.height,
            this.enemiesPos.x,
            this.enemiesPos.y,
            this.width,
            this.height,
        )
        
        this.animate(framesCounter)
        this.move()

    }

    animate() {
        if (framesCounter % 25 == 0) {
            this.images.framesCounter++;
        }

        if (this.images.framesIndex > this.images.frames - 5) {
            this.images.framesIndex = 0
        }
    }

}

class Obstacle {
    constructor(ctx, canvasSize, posX, posY, obstacleWidth, obstacleHeight, speed, image) {
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.obstaclePos = {
            x: posX,
            y: posY
        }
        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }
        this.speed = speed
        this.imageName = image
        this.ctx = ctx
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
        this.moveObstacle()
    }

    moveObstacle() {
        if (this.obstaclePos.y >= this.canvasSize.w - this.obstacleSize.w) {
            this.speed *= -1
        }

        if (this.obstaclePos.y < 0) {
            this.speed *= -1
        }

        if (this.obstaclePos.y >= this.canvasSize.w - this.obstacleSize.w || this.obstaclePos.y < 0) {
            this.changeDirection()
        }

        this.obstaclePos.y += this.speed
    }

    changeDirection() {
        this.speed *= -1
    }
}