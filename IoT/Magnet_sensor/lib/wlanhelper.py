from network import WLAN
import time
import keys


def wlanhelper():
    wlan = WLAN()
    wlan.init()
    wlan.connect(ssid=keys.WIFI_SSID, auth=(WLAN.WPA2, keys.WIFI_PW))
    print('connecting..',end='')
    while not wlan.isconnected():
        time.sleep(1)
        print('.',end='')

    print('connected')
    time.sleep(2)
    return wlan