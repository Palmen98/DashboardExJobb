import network
import time
import keys
import light_manager as lm

def connectToWifi():
    # setup as a station
    wlan = network.WLAN(mode=network.WLAN.STA)
    wlan.connect(keys.WIFI_SSID_LAB, auth=(network.WLAN.WPA2, keys.WIFI_PW_LAB))
    while not wlan.isconnected():
        lm.look_foor_connection()
        print('Connecting to WiFi...')
        time.sleep(2.5)
    
    print('WiFi connected successfully')
    print(wlan.ifconfig())
    lm.connected()
