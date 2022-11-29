makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    if (makerbit.irButton() == 64 && M1 == 0) {
        led.plot(2, 2)
        M1 = 1
        BRILLO = 140
    } else {
        if (makerbit.irButton() == 64 && M1 == 1) {
            led.unplot(2, 2)
            M1 = 0
            BRILLO = 50
        }
    }
})
let BRILLO = 0
let M1 = 0
let strip = neopixel.create(DigitalPin.P1, 300, NeoPixelMode.RGB_RGB)
strip.clear()
serial.setBaudRate(BaudRate.BaudRate115200)
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
M1 = 0
basic.forever(function () {
    strip.setPixelColor(10, neopixel.rgb(150, 255, 20))
    strip.setPixelColor(130, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    serial.writeNumber(makerbit.irButton())
    serial.writeLine("")
    basic.pause(100)
})
