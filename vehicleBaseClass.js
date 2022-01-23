
class Vehicle {
    constructor(location, type, year, transmission, make) {
        this.location = location;
        this.type = type;
        this.year = year;
        this.transmission = transmission;
        this.make = make;
    }
    start() {
        if(this.transmission === "manual") {
            console.log("press clutch than turn key")
        } else{
            console.log("turn key")
        }
        }
}
