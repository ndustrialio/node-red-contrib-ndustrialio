//const sdk = require('@ndustrial/contxt-sdk');

module.exports = function (RED) {
    function NgestNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("nodered-ngest", NgestNode);
}
