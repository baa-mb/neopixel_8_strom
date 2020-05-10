basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let hell = 0
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.setBrightness(hell)
basic.forever(function () {
    hell += 1
    hell = hell % 10
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.setBrightness(hell * 25)
    strip.show()
    basic.showNumber(hell)
    basic.pause(2000)
})
