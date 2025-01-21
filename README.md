
# MMM-WiFiQRCode

This MagicMirror module displays a QR code that allows users to connect to a Wi-Fi network by scanning it with their Apple or Android devices.

## Installation

1. Navigate to your MagicMirror `modules` directory:

  cd ~/MagicMirror/modules

2. Clone the module repository (or create it manually):

   git clone https://github.com/gbassaragh/MMM-WiFiQRCode.git


3. Install dependencies:

   cd MMM-WiFiQRCode
   npm install


4. Add the module to your `config.js` file:

{
    module: "MMM-WiFiQRCode",
    position: "top_right", // Choose a position
    config: {
        ssid: "YourWiFiSSID",
        password: "YourWiFiPassword",
        encryption: "WPA", // WPA, WEP, or nopass for open networks
        hidden: false,     // Set to true if the SSID is hidden
        qrSize: 300        // Size of QR code in pixels
    }
}


5. Restart MagicMirror:
  pm2 restart mm
---

Explanation

- **QRCode Format:** The format `WIFI:T:<encryption>;S:<SSID>;P:<password>;H:<hidden>;` is compatible with both Apple and Android devices.
- **Dependencies:** The module relies on the `qrcode` NPM package to generate the QR image.
- **Customization:** You can modify the position and styling of the QR code through `config.js` settings.

---
