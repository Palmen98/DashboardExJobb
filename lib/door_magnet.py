import time
import wifi
from machine import Pin


# wifi.connectToWifi()
magnet = Pin('P18', mode=Pin.IN)

def start_magnet():
        magnetIsActive = magnet()
        if magnetIsActive == 0:
            print('Door open')
            return magnetIsActive