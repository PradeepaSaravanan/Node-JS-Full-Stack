const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema(
    {
        id:{
            type: Number,
            unique: true,
            trim: true,
            required: [true, "Id is required"],  
        },
        account_number: {
            type: Number,
            unique: true,
            trim: true,
            maxLength:10,
            required: [true, "account number is required"],
        },
        account_name: {
            type: String,
            trim: true,
            required:[true,"account number is required"], 
        },
        account_type: {
            type: String,
            trim: true,
            required: [true, "account Type is required"],
        },
        balance: {
            type: Number,
            trim: true,
            required: [true, "Balance is required"],
        },
        opening_date: {
            type: Date,
            default:Date.now,
            trim: true,
            // required:[true,"account number is required"],
        },
        last_transaction_date: {
            type: Date,
            default:Date.now,
            trim: true,
            //required:[true,"account number is required"],
        },
        status: {
            type: String,
            trim: true,
            required: [true, "Status is required"],
        },
        branch_name: {
            type: String,
            trim: true,
            required: [true, "Branch name is required"],
        },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Accounts", accountSchema);
