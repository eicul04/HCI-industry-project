# Hello World Example
#
# Welcome to the MaixPy IDE!
# 1. Conenct board to computer
# 2. Select board at the top of MaixPy IDE: `tools->Select Board`
# 3. Click the connect buttion below to connect board
# 4. Click on the green run arrow button below to run the script!

import sensor, image, time, lcd

# Setze den Korrekturfaktor basierend auf deinen Experimenten oder Informationen
correction_factor = 1.0

lcd.init()
sensor.reset()                      # Reset and initialize the sensor. It will
                                    # run automatically, call sensor.run(0) to stop
sensor.set_pixformat(sensor.RGB565) # Set pixel format to RGB565 (or GRAYSCALE)
sensor.set_framesize(sensor.QVGA)   # Set frame size to QVGA (320x240)

# Set lower resolution
# sensor.set_windowing((0, 0, 128, 128))

sensor.run(1)
# sensor.skip_frames(time = 2000)     # Wait for settings take effect.
sensor.skip_frames(30)
clock = time.clock()

img = sensor.snapshot()
lcd.display(img)

img.save("/sd/qrcodeOnScreenHighRes.bmp")


'''
while(True):
    clock.tick()                    # Update the FPS clock.
    img = sensor.snapshot()


    img.save("/sd/qrcodeOnScreen.bmp", quality=100) #-> speichern des Bildes auf SD Karte innerhalb der Kamera
    res = img.find_qrcodes()
    fps = clock.fps()
    if len(res) > 0:
        img.draw_string(2, 2, res[0].payload(), color=(0,128,0), scale=2)
        print(res[0].payload())
        print("Codes found :), position of x: ")
        print(res[0].x())
        # print(res.corners())
'''


