input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 71)
        images.arrowImage(ArrowNames.West).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 71)
        images.arrowImage(ArrowNames.West).showImage(0)
    }
})
pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
	
})
