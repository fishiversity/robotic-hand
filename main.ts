let Thumb1Prev = 0
let Fingers2Prev = 0
let Fingers3Prev = 0
let Thumb1 = 0
let Fingers2 = 0
let Fingers3 = 0
led.enable(false)
OLED12864_I2C.init(60)
basic.forever(function () {
    Fingers3 = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    270,
    0
    ))
    Fingers2 = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    270,
    0
    ))
    Thumb1 = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    270,
    0
    ))
    pins.servoWritePin(AnalogPin.P13, Fingers3)
    pins.servoWritePin(AnalogPin.P14, Fingers2)
    pins.servoWritePin(AnalogPin.P15, Thumb1)
})
basic.forever(function () {
    OLED12864_I2C.showNumber(
    0,
    1,
    Fingers3,
    1
    )
    OLED12864_I2C.showNumber(
    4,
    1,
    Fingers2,
    1
    )
    OLED12864_I2C.showNumber(
    8,
    1,
    Thumb1,
    1
    )
    if (Fingers3 != Fingers3Prev) {
        OLED12864_I2C.clear()
        Fingers3Prev = Fingers3
    }
    if (Fingers2 != Fingers2Prev) {
        OLED12864_I2C.clear()
        Fingers2Prev = Fingers2
    }
    if (Thumb1 != Thumb1Prev) {
        OLED12864_I2C.clear()
        Thumb1Prev = Thumb1
    }
})
