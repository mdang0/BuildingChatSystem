import React, {component} from "react";
import "./App.css";

var socket = new WebSocket("ws://localhost:8080/ws");

// connect function has 3 event listeners 
let connect = () => {
    console.log("Attempting connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };
    
    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

let sendMsg = msg => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };

