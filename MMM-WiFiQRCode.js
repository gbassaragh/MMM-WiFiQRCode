Module.register("MMM-WiFiQRCode", {
    defaults: {
        ssid: "Your_SSID_Here",
        password: "Your_Password_Here",
        encryption: "WPA", // Options: WEP, WPA, nopass
        hidden: false,      // true if SSID is hidden
        qrSize: 300         // QR code image size
    },

    start: function () {
        this.qrImageUrl = null;
        this.generateQRCode();
    },

    getDom: function () {
        let wrapper = document.createElement("div");

        if (this.qrImageUrl) {
            let qrImage = document.createElement("img");
            qrImage.src = this.qrImageUrl;
            qrImage.style.maxWidth = this.config.qrSize + "px";
            qrImage.style.maxHeight = this.config.qrSize + "px";
            wrapper.appendChild(qrImage);
        } else {
            wrapper.innerHTML = "Generating Wi-Fi QR Code...";
        }

        return wrapper;
    },

    generateQRCode: function () {
        this.sendSocketNotification("GENERATE_QR", {
            ssid: this.config.ssid,
            password: this.config.password,
            encryption: this.config.encryption,
            hidden: this.config.hidden
        });
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "QR_CODE_GENERATED") {
            this.qrImageUrl = payload;
            this.updateDom();
        }
    }
});
