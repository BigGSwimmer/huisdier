input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("OMDRAAIEN")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # #
        . . . . .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    voorwerp = randint(0, 2)
    if (voorwerp == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (voorwerp == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
let voorwerp = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . . . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Hallo!")
