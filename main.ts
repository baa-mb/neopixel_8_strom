let farb_index = 0
let farbe = 0
let hell = 0
basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
strip.setBrightness(hell)
let farbe_alt = NeoPixelColors.White
let liste = [NeoPixelColors.White, 16711680, 255, 16776960, 65280, 16753920,NeoPixelColors.Indigo]
let farb_anzahl = liste.length
basic.forever(function () {
    hell = (hell + 1) % 10
    farbe = liste[farb_index]
    strip.showColor(farbe)
    strip.setPixelColor(3, farbe_alt)
    strip.setPixelColor(4, farbe_alt)
    strip.setBrightness(hell * 25)
    strip.show()
    if (hell == 0) {
        farbe_alt = farbe
        farb_index = (farb_index + 1) % farb_anzahl
    }
    basic.showNumber(hell)
    basic.pause(1000)
})
