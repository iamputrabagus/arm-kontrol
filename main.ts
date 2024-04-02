input.onButtonPressed(Button.A, function () {
    basic.showNumber(6)
    radio.sendNumber(6)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(4)
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(1)
    radio.sendNumber(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(2)
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(7)
    radio.sendNumber(7)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(3)
    radio.sendNumber(3)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(5)
    radio.sendNumber(5)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(8)
    radio.sendNumber(8)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(9)
    radio.sendNumber(9)
})
radio.setGroup(1)
