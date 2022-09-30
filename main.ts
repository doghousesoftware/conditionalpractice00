let counter = 0
input.onButtonPressed(Button.A, function () {
    counter = randint(0, 10)
    basic.showNumber(counter)
    if (counter <= 4) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
