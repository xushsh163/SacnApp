"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent(bscanner) {
        this.bscanner = bscanner;
        console.log("Hello World");
        console.dir({
            type: "Apple",
            color: "Red"
        });
    }
    AppComponent.prototype.scanBarcode = function () {
        var _this = this;
        console.log("start");
        this.bscanner.scan({
            formats: "QR_CODE",
            cancelLabel: "EXIT. Also, try the volume buttons!",
            cancelLabelBackgroundColor: "#333333",
            message: "Use the volume buttons for extra light",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            continuousScanCallback: function (result) {
                console.log(result.format + ": " + result.text + " (count:)");
                alert({
                    title: "Scan result",
                    message: "Format: " + result.format + ",\nValue: " + result.text,
                    okButtonText: "OK"
                });
                _this.bscanner.stop();
            },
            closeCallback: function () { console.log("Scanner closed"); },
            resultDisplayDuration: 500,
            orientation: "portrait",
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then(function (result) {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            console.log("Format: " + result.format + ",\nValue: " + result.text);
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
        }, function (errorMessage) {
            console.log("No scan.11 " + errorMessage);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <!-- Your UI components go here -->\n    <StackLayout>\n    <Image src=\"~/images/apple.jpg\"></Image>\n    <Button text=\"Scan\" class=\"submit-button\" (tap)=\"scanBarcode()\"></Button>\n    </StackLayout>\n  ",
        providers: [nativescript_barcodescanner_1.BarcodeScanner]
    }),
    __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkVBQTZEO0FBYzdELElBQWEsWUFBWTtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQW9CLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUFBLGlCQW9DQztRQW5DQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsMEJBQTBCLEVBQUUsU0FBUztZQUNyQyxPQUFPLEVBQUUsd0NBQXdDO1lBQ2pELG9CQUFvQixFQUFFLElBQUk7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLHNCQUFzQixFQUFFLFVBQUMsTUFBTTtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RCxLQUFLLENBQUM7b0JBQ0osS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUk7b0JBQ2hFLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixDQUFDO1lBQ0QsYUFBYSxFQUFFLGNBQWMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxtRkFBbUY7U0FDdEksQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFDLE1BQU07WUFDWiwrRkFBK0Y7WUFDL0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLEtBQUssQ0FBQztnQkFDSixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSTtnQkFDaEUsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLFVBQUMsWUFBWTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxZQUFZO0lBWnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsOFJBT1Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBYyxDQUFDO0tBQzVCLENBQUM7cUNBRzhCLDRDQUFjO0dBRmpDLFlBQVksQ0ErQ3hCO0FBL0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cbiAgICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxuICAgIDxTdGFja0xheW91dD5cbiAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYXBwbGUuanBnXCI+PC9JbWFnZT5cbiAgICA8QnV0dG9uIHRleHQ9XCJTY2FuXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzY2FuQmFyY29kZSgpXCI+PC9CdXR0b24+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbQmFyY29kZVNjYW5uZXJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBic2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuICAgIGNvbnNvbGUuZGlyKHtcbiAgICAgIHR5cGU6IFwiQXBwbGVcIixcbiAgICAgIGNvbG9yOiBcIlJlZFwiXG4gICAgfSk7XG4gIH1cblxuICBzY2FuQmFyY29kZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuICAgIHRoaXMuYnNjYW5uZXIuc2Nhbih7XG4gICAgZm9ybWF0czogXCJRUl9DT0RFXCIsICAgLy8gUGFzcyBpbiBvZiB5b3Ugd2FudCB0byByZXN0cmljdCBzY2FubmluZyB0byBjZXJ0YWluIHR5cGVzXG4gICAgY2FuY2VsTGFiZWw6IFwiRVhJVC4gQWxzbywgdHJ5IHRoZSB2b2x1bWUgYnV0dG9ucyFcIiwgLy8gaU9TIG9ubHksIGRlZmF1bHQgJ0Nsb3NlJ1xuICAgIGNhbmNlbExhYmVsQmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIiwgLy8gaU9TIG9ubHksIGRlZmF1bHQgJyMwMDAwMDAnIChibGFjaylcbiAgICBtZXNzYWdlOiBcIlVzZSB0aGUgdm9sdW1lIGJ1dHRvbnMgZm9yIGV4dHJhIGxpZ2h0XCIsIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCBpcyAnUGxhY2UgYSBiYXJjb2RlIGluc2lkZSB0aGUgdmlld2ZpbmRlciByZWN0YW5nbGUgdG8gc2NhbiBpdC4nXG4gICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsICAgLy8gZGVmYXVsdCBmYWxzZVxuICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSwgICAgIC8vIGRlZmF1bHQgZmFsc2VcbiAgICBzaG93VG9yY2hCdXR0b246IHRydWUsICAgICAgICAvLyBkZWZhdWx0IGZhbHNlXG4gICAgYmVlcE9uU2NhbjogdHJ1ZSwgICAgICAgICAgICAgLy8gUGxheSBvciBTdXBwcmVzcyBiZWVwIG9uIHNjYW4gKGRlZmF1bHQgdHJ1ZSlcbiAgICB0b3JjaE9uOiBmYWxzZSwgICAgICAgICAgICAgICAvLyBsYXVuY2ggd2l0aCB0aGUgZmxhc2hsaWdodCBvbiAoZGVmYXVsdCBmYWxzZSlcbiAgICBjb250aW51b3VzU2NhbkNhbGxiYWNrOiAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZm9ybWF0ICsgXCI6IFwiICsgcmVzdWx0LnRleHQgKyBcIiAoY291bnQ6KVwiKTtcbiAgICAgIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiU2NhbiByZXN1bHRcIixcbiAgICAgICAgbWVzc2FnZTogXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblZhbHVlOiBcIiArIHJlc3VsdC50ZXh0LFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgfSk7XG4gICAgICB0aGlzLmJzY2FubmVyLnN0b3AoKTtcbiAgICB9LFxuICAgIGNsb3NlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJTY2FubmVyIGNsb3NlZFwiKTsgfSwgLy8gaW52b2tlZCB3aGVuIHRoZSBzY2FubmVyIHdhcyBjbG9zZWQgKHN1Y2Nlc3Mgb3IgYWJvcnQpXG4gICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDAsICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IDE1MDAgKG1zKSwgc2V0IHRvIDAgdG8gZGlzYWJsZSBlY2hvaW5nIHRoZSBzY2FubmVkIHRleHRcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLCAgICAgLy8gQW5kcm9pZCBvbmx5LCBvcHRpb25hbGx5IGxvY2sgdGhlIG9yaWVudGF0aW9uIHRvIGVpdGhlciBcInBvcnRyYWl0XCIgb3IgXCJsYW5kc2NhcGVcIlxuICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWUgLy8gT24gaU9TIHlvdSBjYW4gc2VuZCB0aGUgdXNlciB0byB0aGUgc2V0dGluZ3MgYXBwIGlmIGFjY2VzcyB3YXMgcHJldmlvdXNseSBkZW5pZWRcbiAgfSkudGhlbiggKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgUHJvbWlzZSBpcyBuZXZlciBpbnZva2VkIHdoZW4gYSAnY29udGludW91c1NjYW5DYWxsYmFjaycgZnVuY3Rpb24gaXMgcHJvdmlkZWRcbiAgICAgIGNvbnNvbGUubG9nKFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixcXG5WYWx1ZTogXCIgKyByZXN1bHQudGV4dCk7XG4gICAgICBhbGVydCh7XG4gICAgICAgIHRpdGxlOiBcIlNjYW4gcmVzdWx0XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixcXG5WYWx1ZTogXCIgKyByZXN1bHQudGV4dCxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgIH0pO1xuICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2Nhbi4xMSBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==