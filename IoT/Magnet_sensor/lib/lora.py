from network import LoRa
import socket
import time
import ubinascii
import keys
import lib.light_manager as light_manager

lora = LoRa(mode=LoRa.LORAWAN, region=LoRa.EU868)
# create an OTAA authentication parameters, change them to the provided credentials
app_eui = ubinascii.unhexlify(keys.app_eui_magnet_sensor)
app_key = ubinascii.unhexlify(keys.app_key_magnet_sensor)
#uncomment to use LoRaWAN application provided dev_eui
# dev_eui = ubinascii.unhexlify(device_dev_eui)
# join a network using OTAA (Over the Air Activation)
#uncomment below to use LoRaWAN application provided dev_eui
lora.join(activation=LoRa.OTAA, auth=(app_eui, app_key), timeout=0)
#lora.join(activation=LoRa.OTAA, auth=(dev_eui, app_eui, app_key), timeout=0)

# wait until the module has joined the network
while not lora.has_joined():
    light_manager.look_foor_connection() # show with light that it still looking
    print('Not yet joined...')
    time.sleep(3)

print('Joined Network')
light_manager.connected() # show with lights that it find network
# create a LoRa socket
s = socket.socket(socket.AF_LORA, socket.SOCK_RAW)

# set the LoRaWAN data rate
s.setsockopt(socket.SOL_LORA, socket.SO_DR, 5)

# make the socket blocking
# (waits for the data to be sent and for the 2 receive windows to expire)
s.setblocking(True)

# make the socket non-blocking
# (because if there's no data received it will block forever...)
s.setblocking(False)

# get any data received (if any...)
data = s.recv(64)
print(data)

