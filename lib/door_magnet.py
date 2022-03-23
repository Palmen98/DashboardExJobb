import time
# import wifi
from machine import Pin
import lora 
import keys
import light_manager

lora.startLoraConnection(keys.app_eui_magnet_sensor, keys.app_key_magnet_sensor, keys.dev_eui_magnet_sensor)


# wifi.connectToWifi()
magnet = Pin('P18', mode=Pin.IN)

def sendData(port, pin):
    lora.s.bind(port)
    lora.s.send(bytes(pin))

def start_magnet():
    while True:
        magnetIsActive = magnet()
        if magnetIsActive == 0:
            print('Door open')
            # sendData(18, magnetIsActive)
            # light_manager.sendData()
            # print('Sending data')
            time.sleep(10)
            # return magnetIsActive