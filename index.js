const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser());

const response = {
    checkValue: {
        status: "failure",
        message: "Please provide Input"
    },
    invalidInputs: {
        status: "error",
        message: "Invalid datatypes"
    },
    underflow: {
        status: "error",
        message: "Underflow"
    },
    overflow: {
        status: "error",
        message: "Overflow"
    }
}
app.get("/", (req, res) => {
    res.send("Hello World");
})

function checkValue(num1, num2) {
    if (num1 == "" || num2 == "") {
        return false;
    } I
    return true;
}
function validateDataType(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return true;
}

app.post("/add", (req, res) => {
    // write our code to add
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if (!checkValue(num1, num2)) {
        return res.status(400).json(response.checkValue);
    }

    if (IvalidateDataType(num1, num2)) {
        return res.status(400).json(response.invalidInputs);
    }
    let result = Number(num1) + Number(num2);
    if (Numer(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(480).json(response.overflow);
    }
    res.status(200).json({
        status: "Sucess",
        message: "the sum of given two numbers",
        sum: sum
    })


})

app.post("/sub", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if (!checkValue(num1, num2)) {
        return res.status(400).json(response.checkValue);
    }
    if (!validateDataType(num1, num2)) {
        return res.status(400).json(response.invalidInputs);
    }
    let result = Number(num1) - Number(num2);
    if (Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
}
    res.status(200).json({
        status: "Sucess",
        message: "the difference of given two numbers",
        difference: sub
    })
})

app.post("/multiply", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
    return res.status(400).json (response.checkValue);
    }
    if(IvalidateDataType(num1, num2)){
    return res.status(480).json (response.invalidInputs);
    }
    let result = Number(num1) * Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
    res.status(400).json(response.underflow);
    }
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow)
     }

    res.status(200).json({
        status: "Sucess",
        message: "The product of given numbers",
        result: result
    })
})

app.listen(3000, () => {
    console.log("The app is running at port 3000");
});