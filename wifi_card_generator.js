const form = document.getElementById("wifiForm");
const qrContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("downloadBtn");

// Create QRious instance
const qr = new QRious({
    element: document.createElement("canvas"),
    size: 180,
    value: ""
});

// Insert canvas into the QR container
qrContainer.appendChild(qr.element);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const ssid = document.getElementById("ssid").value.trim();
    const password = document.getElementById("password").value.trim();

  // WiFi QR format: WIFI:T:WPA;S:SSID;P:PASSWORD;;
    const qrText = `WIFI:T:WPA;S:${ssid};P:${password};;`;
    qr.set({
        value: qrText
    });
    downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.download = "wifi_qr.png";
    link.href = qr.toDataURL("image/png");
    link.click();
});
