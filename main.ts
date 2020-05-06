basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let hell = 0
strip.setBrightness(hell)
basic.forever(function () {
    hell += 10
    strip.rotate(1)
    strip.setBrightness(hell)
    basic.showNumber(hell)
    basic.pause(5000)
})
