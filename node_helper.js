const NodeHelper = require("node_helper");
const QRCode = require("qrcode");

module.exports = NodeHelper.create({
    socketNotificationReceived: function (notification, payload) {
        if (notification === "GENERATE_QR") {
            this.generateWiFiQRCode(payload);
        }
    },

    generateWiFiQRCode: function (config) {
        const { ssid, password, encryption, hidden } = config;

        // Wi-Fi QR Code format: WIFI:T:<encryption>;S:<SSID>;P:<password>;H:<hidden>;
        const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden ? "true" : "false"};`;

        QRCode.toDataURL(wifiString, { width: 300 }, (err, url) => {
            if (err) {
                console.error("QR Code generation error:", err);
                return;
            }
            this.sendSocketNotification("QR_CODE_GENERATED", url);
        });
    }
});
