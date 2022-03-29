import time
from lib.wlanhelper import wlanhelper
import lib.Magnet_sensor as magnet

wlan = wlanhelper()

print(wlan.ifconfig()[0])

print('Starting program...')
magnetIsActive = magnet.start_magnet()
