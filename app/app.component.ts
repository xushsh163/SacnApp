import { Component } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <StackLayout>
    <Image src="~/images/apple.jpg"></Image>
    <Button text="Scan" class="submit-button" (tap)="scanBarcode()"></Button>
    </StackLayout>
  `,
  providers: [BarcodeScanner]
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor(private bscanner: BarcodeScanner) {
    console.log("Hello World");
    console.dir({
      type: "Apple",
      color: "Red"
    });
  }

  scanBarcode() {
    console.log("start");
    this.bscanner.scan({
    formats: "QR_CODE",   // Pass in of you want to restrict scanning to certain types
    cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
    cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
    message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
    showFlipCameraButton: true,   // default false
    preferFrontCamera: false,     // default false
    showTorchButton: true,        // default false
    beepOnScan: true,             // Play or Suppress beep on scan (default true)
    torchOn: false,               // launch with the flashlight on (default false)
    continuousScanCallback: (result) => {
      console.log(result.format + ": " + result.text + " (count:)");
      alert({
        title: "Scan result",
        message: "Format: " + result.format + ",\nValue: " + result.text,
        okButtonText: "OK"
      });
      setTimeout( () => {
        this.bscanner.stop();
      }, 5000);    
    },
    closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
    resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
    orientation: "portrait",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
    openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
  }).then( (result) => {
      // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
      console.log("Format: " + result.format + ",\nValue: " + result.text);
      alert({
        title: "Scan result",
        message: "Format: " + result.format + ",\nValue: " + result.text,
        okButtonText: "OK"
      });
    }, (errorMessage) => {
      console.log("No scan.11 " + errorMessage);
    });
  }
}
