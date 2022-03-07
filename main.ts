let stappen = 0
let teller = 0
input.onButtonPressed(Button.A, function () {
    stappen = 0
    basic.showNumber(stappen)
})
input.onButtonPressed(Button.B, function () {
    teller = 0
    basic.showNumber(teller)
})
input.onGesture(Gesture.ThreeG, function () {
    stappen += 1
    basic.showNumber(stappen)
})
