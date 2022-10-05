class Device {
    constructor(kind, power) {
        this.kind = kind;
        this.power = power;
    }
    
    plugOrNot() {
        if (this.power>=70) {
            return false;
        } else {
            return true;
        }
    }
}
  
class DeviceType extends Device {
    constructor(kind, power, isWireless){
        super(kind, power);
        this.isWireless = isWireless || false;
    }
    whatToDo() {
        let authToPlug = super.plugOrNot();
        if (authToPlug && !(this.isWireless)) {
            console.log('Keep It Plugged');
        } else if (!(authToPlug) && !(this.isWireless)) {
            console.log('Unplug It Immediately!!!!');
        } else if (this.isWireless) {
            console.log('Impossible To Plug');  
        }
    }
}

const kettle = new Device ('kettle', 40);
kettle.getInfo();

const microwave = new Device ('microwave', 70, true);
microwave.getInfo();

const meatGrinder = new Device ('meatGrinder', 90);
meatGrinder.getInfo();