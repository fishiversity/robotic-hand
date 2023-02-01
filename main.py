awesome = 0
led.enable(False)
OLED12864_I2C.init(60)
offset = 0

def on_forever():
    global awesome, offset
    OLED12864_I2C.show_string(0, 0, "Servo Angle", 1)
    awesome = Math.round(pins.map(pins.analog_read_pin(AnalogPin.P4), 0, 1023, 270, 0))
    pins.servo_write_pin(AnalogPin.P13, awesome)
    if awesome > 99:
        offset = 0
    elif awesome >= 10 and awesome <= 99:
        offset = 1
        OLED12864_I2C.show_string(0, 2, " ", 1)
    else:
        offset = 2
        OLED12864_I2C.show_string(0, 2, "  ", 1)
    OLED12864_I2C.show_number(offset, 2, awesome, 1)
basic.forever(on_forever)


def servo270(num: number):
    pins.servo_write_pin(AnalogPin.P13, pins.map(num, 0, 270, 0, 180))
led.enable(False)