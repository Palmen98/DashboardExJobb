import time
# import wifi
from machine import Pin
import lora 
import light_manager


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
            sendData(18, 10)
            light_manager.sendData()
            print('Sending data')
            time.sleep(30)