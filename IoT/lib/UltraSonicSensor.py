import utime
import pycom
import time
from machine import Pin

# initialise Ultrasonic Sensor pins
echo = Pin('P18', mode=Pin.IN)
trigger = Pin('P20', mode=Pin.OUT)
trigger(0)

# Ultrasonic distance measurment
def distance_measure():
    # trigger pulse LOW for 2us (just in case)
    trigger(0)
    utime.sleep_us(2)
    # trigger HIGH for a 10us pulse
    trigger(1)
    utime.sleep_us(10)
    trigger(0)

    # wait for the rising edge of the echo then start timer
    while echo() == 0:
        pass
    start = utime.ticks_us()

    # wait for end of echo pulse then stop timer
    while echo() == 1:
        pass
    finish = utime.ticks_us()

    # pause for 20ms to prevent overlapping echos
    # utime.sleep_ms(20)

    # calculate distance by using time difference between start and stop
    # speed of sound 340m/s or .034cm/us. Time * .034cm/us = Distance sound travelled there and back
    # divide by two for distance to object detected.
    distance = ((utime.ticks_diff(finish, start)) * 0.034)/2
    return int(distance)

 # to reduce errors we take ten readings and use the median
def distance_median():
    # initialise the list
    distance_samples = []
    # take 10 samples and append them into the list
    for count in range(10):
        distance_samples.append(int(distance_measure()))
    # sort the list
    distance_samples = sorted(distance_samples)
    # take the center list row value (median average)
    distance_median = distance_samples[int(len(distance_samples)/2)]
    # apply the function to scale to volts

    print(distance_samples)

    return int(distance_median)



print('Starting to measure distance')
# disable LED heartbeat (so we can control the LED)
pycom.heartbeat(False)
time.sleep(2)

while True:
    # take distance measurment, turn the light blue when measuring
	pycom.rgbled(0x00007d)
	utime.sleep(1)
	distance = distance_median()
	pycom.rgbled(0x004600)

	print("Distance:  ", distance)


