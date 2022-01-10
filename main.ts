let Luftmessung = 0
basic.setLedColor(0x007fff)
basic.forever(function () {
    basic.pause(1000)
    Luftmessung = pins.analogReadPin(AnalogPin.C16)
    basic.showNumber(Luftmessung)
    if (Luftmessung < 100) {
        basic.setLedColor(0x00ff00)
    } else {
        if (Luftmessung > 100 && Luftmessung < 400) {
            basic.setLedColor(0xffff00)
        } else {
            if (Luftmessung > 400 && Luftmessung < 700) {
                basic.setLedColor(0xff8000)
            } else {
                basic.setLedColor(0xff0000)
            }
        }
    }
})
