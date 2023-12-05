# HCI Industry project: Haptic factory planning model table
## Technical MVP
  - [ArUco Marker Creation and Detection with OpenCV library](https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html)
  - The co-pilot first indicates the position on a display (according to the chess/battleship principle A3, Cx, ... )
  - Manual positioning of the blocks by the team -> table is tracked by a camera sending feedback to the co-pilot
## Setup development environment (UIFlow)
### UIFlow for M5Stack Core2
- [Setup Guide](https://docs.m5stack.com/en/quick_start/core2/uiflow)
### CircuitPython
CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards.
Circuitpython offers a [library](https://docs.circuitpython.org/en/latest/shared-bindings/qrio/index.html) for QR Code reading. 
- Download bin-file for CircuitPython for M5Stack Core2 [here](https://circuitpython.org/board/m5stack_core2/)
- Installation guide for Circuit Python for M5Stack Core2 [here](https://learn.adafruit.com/welcome-to-circuitpython/non-uf2-installation)
- [Guide](https://learn.adafruit.com/scan-qr-codes-with-circuitpython) for scanning QR Codes with CircuitPython
- [Guide](https://learn.adafruit.com/scan-qr-codes-with-circuitpython/scan-to-usb-hid) to Scan To USB HID
## Setup development environment (OpenCV in Visual Studio)
- Follow [this](https://subwaymatch.medium.com/adding-opencv-4-2-0-to-visual-studio-2019-project-in-windows-using-pre-built-binaries-93a851ed6141) tutorial
### Possible problems
If there is a problem with the opencv_world420d.dll file, proceed as follows:
- From your opencv installation folder (e.g. here: "C:\opencv\build\x64\vc15\bin\opencv_world420d.dll”) copy the file and paste it into the Debug folder of your project: ModelTable\x64\Debug where the ModelTable.exe file should be
### ArUco Marker creation
For the creation of aruco markers there are a lot of free online tools available. For this project we use the [ArUco marker sheet generator](https://fodi.github.io/arucosheetgen/).
