let sprite_1 = game.createSprite(0, randint(0, 4))
let sprite_2 = game.createSprite(randint(0, 4), randint(1, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        sprite_1.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        sprite_1.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        sprite_1.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite_1.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (sprite_1.isTouching(sprite_2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        game.gameOver()
    }
})
