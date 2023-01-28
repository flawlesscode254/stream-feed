const rtspStream = require('node-rtsp-stream');

//@desc     Camera Authentication
var ip_address = "119.82.252.166" //NOTE: replace it with your camera IP address

//@desc     Camera username and password
var username = "service";
var password="WSS4Bosch!";

//@desc     A channel of camera stream
stream = new rtspStream({
    streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
    wsPort: 9999    
});