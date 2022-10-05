function Device() {
    this.description = 'Electric Device',
    this.plugOrNot = function() {
        if (this.power>=70) {
            return false;
            } else {
            return true;
        }
    },
    this.output = function () {
        console.log('This is an ' + this.description + ' ' + 'called ' + this.kind.toUpperCase())
    }
}

function DeviceType(kind, power, isWireless) {
    this.kind = kind,
    this.power = power,
    this.isWireless = isWireless || false
}

DeviceType.prototype = new Device();

DeviceType.prototype.whatToDo = function () {
    let authToPlug = this.plugOrNot();
    if (authToPlug && !(this.isWireless)) {
        console.log('Keep It Plugged');
    } else if (!(authToPlug) && !(this.isWireless)) {
        console.log('Unplug It Immediately!!!!');
    } else if (this.isWireless) {
        console.log('Use It Unplugged');  
    }
}


const kettle = new DeviceType ('kettle', 40);  
console.log(kettle.output(), kettle.whatToDo());

const microwave = new DeviceType ('microwave', 70, true);  
console.log(microwave.output(), microwave.whatToDo());

const meatGrinder = new DeviceType ('meatGrinder', 90);  
console.log(meatGrinder.output(), meatGrinder.whatToDo());