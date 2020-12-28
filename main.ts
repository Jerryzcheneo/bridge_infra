bluetooth.onBluetoothConnected(function () {
    start_sending2 = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
})
bluetooth.onBluetoothDisconnected(function () {
    start_sending2 = 0
    basic.showIcon(IconNames.No)
    basic.pause(200)
})
let temp42 = 0
let temp32 = 0
let temp22 = 0
let temp5 = 0
let start_sending2 = 0
basic.showString("S")
basic.pause(200)
bluetooth.startUartService()
let no_of_person2 = 0
start_sending2 = 0
basic.forever(function () {
    temp5 = pins.analogReadPin(AnalogPin.P0)
    basic.pause(200)
    temp22 = pins.analogReadPin(AnalogPin.P0)
    if (temp22 - temp5 < 0) {
        no_of_person2 += 1
    } else {
        if (temp22 - temp5 > 0) {
            no_of_person2 += -1
        }
    }
    if (no_of_person2 < 0) {
        no_of_person2 = 0
    }
    if (start_sending2 == 1) {
        bluetooth.uartWriteNumber(no_of_person2)
    }
    basic.showNumber(no_of_person2)
})
basic.forever(function () {
    temp32 = pins.analogReadPin(AnalogPin.P1)
    basic.pause(200)
    temp42 = pins.analogReadPin(AnalogPin.P1)
    if (temp42 - temp32 < 0) {
        no_of_person2 += 1
    } else {
        if (temp42 - temp32 > 0) {
            no_of_person2 += -1
        }
    }
    if (no_of_person2 < 0) {
        no_of_person2 = 0
    }
    if (start_sending2 == 1) {
        bluetooth.uartWriteNumber(no_of_person2)
    }
    basic.showNumber(no_of_person2)
})
