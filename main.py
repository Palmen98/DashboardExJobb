import time
import lib.door_magnet as magnet

print('Starting program...')
while True:
    magnetIsActive = magnet.start_magnet()
    if magnetIsActive == 0:
        pybytes.send_signal(1, magnetIsActive)
        print("sending: {}".format(magnetIsActive))
        time.sleep(10)