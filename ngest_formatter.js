//const sdk = require('@ndustrial/contxt-sdk');

module.exports = function (RED) {
    function NgestFormatterNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg, send, done) {
            var ngestmsg = {};
            ngestmsg.payload = {};
            ngestmsg.payload.type = "timeseries";
            //set timestamp to now
            var thistimestamp = Date.now().toString();

            msg.payload.forEach(function (element) {
                //grab timestamp, reformat and tag
                element.timestamp = thistimestamp;
                //id = tagname
                //v = value
                //q = quality = updates every scan
                //t = timestamp
                //re-write id/value to match ngest format
                var data = "{\"" + element.name.toString() + "\": {\"value\": \"" + element.value.toString() + "\"}}";
                element.data = JSON.parse(data);
                //element.data = data;
                //remove original elements 
                delete element.value;
                delete element.name;
            });
            ngestmsg.payload.data = msg.payload;
            ngestmsg.payload = JSON.stringify(ngestmsg.payload);
            ngestmsg.payload = JSON.parse(ngestmsg.payload);
            node.send(ngestmsg);
            if (done) {
                done();
            }
        });
    }
    RED.nodes.registerType("nGest Formatter", NgestFormatterNode);
}
