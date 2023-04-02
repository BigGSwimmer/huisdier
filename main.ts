// Verander niet naar blokken!!

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
    music.playMelody("E E F G G F E D C C D E E D D", 125)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
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
    music.playMelody("B G A D - D A B G D - B A G D - D A B G", 120)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
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
