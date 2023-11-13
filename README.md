# HCI Industry project: Haptic factory model table
## Technical MVP
  - [ArUco Marker Creation and Detection with OpenCV library](https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html)
  - The co-pilot first indicates the position on a display (according to the chess/battleship principle A3, Cx, ... )
  - Manual positioning of the blocks by the team -> table is tracked by a camera sending feedback to the co-pilot
## Setup development environment (OpenCV in Visual Studio)
- Follow [this](https://subwaymatch.medium.com/adding-opencv-4-2-0-to-visual-studio-2019-project-in-windows-using-pre-built-binaries-93a851ed6141) tutorial
### Possible problems
If there is a problem with the opencv_world420d.dll file, proceed as follows:
- From your opencv installation folder (e.g. here: "C:\opencv\build\x64\vc15\bin\opencv_world420d.dll”) copy the file and paste it into the Debug folder of your project: ModelTable\x64\Debug where the ModelTable.exe file should be
