import time
from machine import Pin

magnet = Pin('P18', mode=Pin.IN)


while True:
    time.sleep(2.5)
    val1 = magnet()
    print(val1)
    if val1 == 1:
        print('Door closed')
    else:
        print('Door open')