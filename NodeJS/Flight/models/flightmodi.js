const mongoose = require('mongoose');

const flightSchema= new mongoose.Schema({
    flight_number: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Flight-Number is Required"]
    },
    seating_capacity: {
        type: Number,
        trim: true
    },
    source: {
        type: String,
        trim: true
    },
    destination: {
        type: String,
        trim: true
    },
    arrival_Time: {
        type: String,
        trim: true
    },
    departure_Time: {
        type: String,
        trim: true
    },
    travel_Date: {
        type: Date,
        default: Date.now,
        trim: true
    },
    cost: {
        type: Number,
        trim: true
    }
})
const bookingSchema = new mongoose.Schema({
    
    customer_name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    customer_age: {
        type: Number,
        trim: true,
        required: [true, "Age is required"],
    },
    phone: {
        type: Number,
        trim: true,
        maxLength: 10,
        required: [true, "Mobile number is required"],
    },
    aadhar_id: {
        type: Number,
        trim: true,
        required: [true, "Aadhar number is mandatory"],
    },
    passport_number: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"]

    },
    flights: [flightSchema]
})

module.exports = mongoose.model("Booking", flightSchema);
