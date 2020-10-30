const gameApp = {
    name: 'Pending name app',
    description: 'Canvas app for basic shapes controlling',
    version: '1.0.0',
    license: undefined,
    author: 'José Dorado y Jorge Martín',
    canvasTag: undefined,
    ctx: undefined,
    background: undefined,
    frames: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    mouse: {
        x: undefined,
        y: undefined,
    },
    
    obstacles: [],

    init(id) {
        this.canvasTag = document.getElementById("myCanvas")
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.drawAll()
        //this.start()
        //this.reset()
        //this.background
        //this.cosas creadas
        //this.cosas dibujadas
        //this.setEventListeners()
        //this.score()
        //this.lives()
    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    drawArc() {
        this.ctx.fillStyle = 'green'
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'black'
        this.ctx.arc(150, 720, 300, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()

        this.ctx.fillStyle = 'green'
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'black'
        this.ctx.arc(this.canvasSize.w -150, this.canvasSize.h - 100, 320, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.fillStyle = 'green'
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'black'
        this.ctx.arc(this.canvasSize.w - 650, this.canvasSize.h - 50, 270, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.fillStyle = 'green'
        this.ctx.lineWidth = 8
        this.ctx.strokeStyle = 'black'
        this.ctx.arc(this.canvasSize.w - 950, this.canvasSize.h - 30, 200, 0, Math.PI * 2)
        this.ctx.fill()
    },

    // start() {
    //     // portada ?
    //     this.reset()

    //     this.interval = setInterval(() => {

    //         //this.clear()
    //         this.drawAll()
            
    //         console.log('hola2')
    //         // this.generateEnemies()
    //         // this.clearEnemies()

    //         if (this.gameOver === true) {

    //         }

    //     }, 70)
    // },


    reset() { 
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "landscape.png")
        console.log ('hola')
        //this.mouse = new 

    },  

    drawAll() {
        this.background = new Background(this.ctx, 330, 130, 300, 300, "landscape.png")
        this.drawArc()
        console.log('hola')
        
        console.log('hola2')
        this.background.draw()
    },

}

