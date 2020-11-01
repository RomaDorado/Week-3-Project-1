const gameApp = {
    name: 'Pending name app',
    description: 'Canvas app for basic shapes controlling',
    version: '1.0.0',
    license: undefined,
    author: 'José Dorado y Jorge Martín',
    canvasTag: undefined,
    ctx: undefined,
    player: undefined,
    enemies: [],
    obstacles: [],
    rocks: [],
    background: undefined,
    lives: 3,
    score: 0,
    frames: 0,
    gameOver: false,
    canvasSize: {
        w: 882,
        h: 600
    },
    mouse: {
        x: undefined,
        y: undefined,
    },

    init(id) {
        this.canvasTag = document.getElementById("myCanvas")
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        //this.setEventListeners()
        this.drawAll()
        
        this.createEnemies()

        this.start()
        //this.cosas creadas
        //this.cosas dibujadas
    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    start() {
        // portada ?
        this.reset()

        this.interval = setInterval(() => {
            this.frames++
            if (this.frames % 60 === 0) {
                this.createEnemies()
            }
            if (this.frames % 501 === 0) {
                console.log('hola5')
            }

            if (this.createEnemies < 6) {
                return this.obstacles
            }

            this.drawAll()


//         
//         // this.generateEnemies()
//         // this.clearEnemies()

//         if (this.gameOver === true) {

//         }
        }, 70)
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "/backgroundGAME.png")
        console.log('hola')
        //this.mouse = new

    },

    drawAll() {

        this.clearScreen()
        this.createScore()
        this.createLives()
        this.createPlayer()
        //this.clear()
        this.player.createCursor()
        this.createEnemies()
        console.log('hola2')
        console.log('hola')
        //this.background.draw()
    },

    createEnemies() {
        //alert ('soy obstaculo')
        const enemies1 = new Enemies(this.ctx, this.canvasSize, this.canvasSize.w - 400, 0, 70, 70, 4, 'enemigo-1.png')
        const enemies2 = new Enemies(this.ctx, this.canvasSize, this.canvasSize.w - 200, 0, 60, 60, 6, 'enemigo-1.png')
        this.enemies.push(enemies1, enemies2)
    },

    createPlayer() {
        this.player = new Player(this.window, this.ctx, 100, 100, 'puntero-de-pistola.svg', this.canvasSize.w, this.canvasSize.h)

    },

    createScore() {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '16px sans-serif'
        this.ctx.fillText(`Score: ${this.score}`, this.canvasSize.w - 150, 40)

        // this.enemies.forEach(elm => {
        //     if (elm.enemiesPosition.y > this.player.)
        // })
    },

    createLives() {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '16px sans-serif'
        this.ctx.fillText(`Lives: ${this.lives}`, this.canvasSize.w - 250, 40)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        
        if (this.framesCounter % 50 === 0) {
            this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.height, this.player.posY0))
        }
    },

    clearObstacle() {
        
    },

    generateRocks() {
        this.rocks.push(new Rocks(this.ctx, this.width, this.player.height, this.player.posY0))
    },

    loseLives() {
        this.lives--
        if (this.lives < 0) {
            return this.gameFinished
        }
    },
    
    gameFinished() {
        //pantalla de despedida
        alert ('FIN DEL JUEGO')
    }

 }
