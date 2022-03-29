import urequests
import keys

def get():
    response = urequests.get("http://" + keys.RASPBERRY_PI)
    print('Sound inbound')
    response.close()