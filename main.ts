input.onButtonPressed(Button.A, function () {
    startbit.setServo(startbit.startbit_servorange.range2, 1, 50, 50)
    basic.pause(500)
    startbit.setServo(startbit.startbit_servorange.range2, 1, 90, 200)
    basic.pause(200)
})
startbit.startbit_Init()
let 计数 = 0
let 步骤 = 0
startbit.startbit_digitaltube(startbit.startbit_digitaltubePort.port2, 7, 4)
startbit.setServo(startbit.startbit_servorange.range2, 1, 90, 300)
basic.pause(300)
basic.forever(function () {
    if (步骤 == 0) {
        if (startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port1)) {
            步骤 = 1
        }
    } else {
        if (!(startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port1))) {
            计数 += 1
            if (计数 > 9999) {
                计数 = 1
            }
            步骤 = 0
        }
    }
    startbit.startbit_showNumber(计数)
})
