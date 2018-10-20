enum MotorAddress {
    //% block="ADDR:000"
    Adr0,
    //% block="ADDR:001"
    Adr1,
    //% block="ADDR:010"
    Adr2,
    //% block="ADDR:011"
    Adr3,
    //% block="ADDR:100"
    Adr4,
    //% block="ADDR:101"
    Adr5,
    //% block="ADDR:110"
    Adr6,
    //% block="ADDR:111"
    Adr7
}

enum MotorNumber {
    //% block="Motor:1"
    Motor1,
    //% block="Motor:2"
    Motor2
}

//% weight=100 color=#e2ca02 icon="\uf118"
namespace smile_robotics {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    //% Speed.min=-255 Speed.max=255
    //% Speed.shadow=turnRatioPicker
    export function dual_evo24x9_i2c_run(Addr: MotorAddress, Motor: MotorNumber, Speed: number): void {
        let tAddress = 0;
        let tValue = 0;
        if (Speed > 255) Speed = 255;
        else if (Speed < -255) Speed = -255;
        switch (Motor) {
            case MotorNumber.Motor1:
                tValue = 133;
                break;
            case MotorNumber.Motor2:
                tValue = 134;
                break;
        }
        if (Speed > 0) {
            tValue += 256;
            tValue += 65536 * Speed;
        }
        else if (Speed < 0) {
            tValue += 512;
            tValue += 65536 * -Speed;
        }
        else {
            tValue += 768;
        }
        switch (Addr) {
            case MotorAddress.Adr0:
                tAddress = 80;
                break;
            case MotorAddress.Adr1:
                tAddress = 81;
                break;
            case MotorAddress.Adr2:
                tAddress = 82;
                break;
            case MotorAddress.Adr3:
                tAddress = 83;
                break;
            case MotorAddress.Adr4:
                tAddress = 84;
                break;
            case MotorAddress.Adr5:
                tAddress = 85;
                break;
            case MotorAddress.Adr6:
                tAddress = 86;
                break;
            case MotorAddress.Adr7:
                tAddress = 87;
                break;
        }
        pins.i2cWriteNumber(tAddress, tValue, NumberFormat.Int32LE);
    }
    //% block
    //% Speed.min=0 Speed.max=255
    //% Speed.shadow=turnRatioPicker
    export function dual_evo24x9_i2c_brake(Addr: MotorAddress, Motor: MotorNumber, Speed: number): void {
        let tAddress = 0;
        let tValue = 0;
        if (Speed > 255) Speed = 255;
        else if (Speed < 0) Speed = 0;
        switch (Motor) {
            case MotorNumber.Motor1:
                tValue = 133;
                break;
            case MotorNumber.Motor2:
                tValue = 134;
                break;
        }
        tValue += 768;
        tValue += 65536 * Speed;
        switch (Addr) {
            case MotorAddress.Adr0:
                tAddress = 80;
                break;
            case MotorAddress.Adr1:
                tAddress = 81;
                break;
            case MotorAddress.Adr2:
                tAddress = 82;
                break;
            case MotorAddress.Adr3:
                tAddress = 83;
                break;
            case MotorAddress.Adr4:
                tAddress = 84;
                break;
            case MotorAddress.Adr5:
                tAddress = 85;
                break;
            case MotorAddress.Adr6:
                tAddress = 86;
                break;
            case MotorAddress.Adr7:
                tAddress = 87;
                break;
        }
        pins.i2cWriteNumber(tAddress, tValue, NumberFormat.Int32LE);
    }
    //% block
    //% Time.min=1 Time.max=250
    //% Speed.shadow=turnRatioPicker
    export function dual_evo24x9_i2c_fail_safe_set(Addr: MotorAddress, Time: number): void {
        let tAddress = 0;
        let tValue = 65667;
        if (Time > 250) Time = 250;
        else if (Time < 1) Time = 1;
        tValue += 256*Time;
        switch (Addr) {
            case MotorAddress.Adr0:
                tAddress = 80;
                break;
            case MotorAddress.Adr1:
                tAddress = 81;
                break;
            case MotorAddress.Adr2:
                tAddress = 82;
                break;
            case MotorAddress.Adr3:
                tAddress = 83;
                break;
            case MotorAddress.Adr4:
                tAddress = 84;
                break;
            case MotorAddress.Adr5:
                tAddress = 85;
                break;
            case MotorAddress.Adr6:
                tAddress = 86;
                break;
            case MotorAddress.Adr7:
                tAddress = 87;
                break;
        }
        pins.i2cWriteNumber(tAddress, tValue, NumberFormat.Int32LE);
    }
}
