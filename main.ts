controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 5) {
        astroid.destroy()
        smol_stroid.destroy()
        boom.destroy()
        info.setScore(0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -70)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let boom: Sprite = null
let smol_stroid: Sprite = null
let astroid: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 . . . . 7 7 . . . 
    . . . . 7 7 . . . . . . 7 7 . . 
    . . . 7 7 . . . . . . . . 7 7 . 
    7 7 7 . . . . . . . . . . . 7 7 
    `, SpriteKind.Player)
mySprite.setPosition(75, 111)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
let speed = 50
game.onUpdateInterval(5000, function () {
    smol_stroid = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, speed * 2)
    smol_stroid.x = randint(0, scene.screenWidth())
    smol_stroid.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(5000, function () {
    speed += 10
})
game.onUpdateInterval(1000, function () {
    astroid = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, 0, speed)
    astroid.x = randint(0, scene.screenWidth())
    astroid.setKind(SpriteKind.Enemy)
})
forever(function () {
    mySprite2 = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . 6 6 6 2 2 2 2 2 2 6 6 6 6 . . 
        6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
        6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
        6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
        6 6 6 6 2 2 2 2 2 2 6 6 6 6 6 . 
        6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
        6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
        6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
        . 6 6 6 2 2 2 2 2 2 6 6 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite2.setPosition(10, 111)
    if (info.score() < 5) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        mySprite2.setImage(img`
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . 6 6 6 2 2 2 2 2 2 6 6 6 6 . . 
            6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
            6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
            6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
            6 6 6 6 2 2 2 2 2 2 6 6 6 6 6 . 
            6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
            6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
            6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 . 
            . 6 6 6 2 2 2 2 2 2 6 6 6 6 . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
game.onUpdateInterval(10000, function () {
    boom = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, speed * 5)
    boom.x = randint(0, scene.screenWidth())
    boom.setKind(SpriteKind.Enemy)
})
