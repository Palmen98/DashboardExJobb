#!/usr/bin/expect -f
spawn ssh pi@172.27.124.195 paplay piano2.wav
expect "Password:*"
send "123456789\n"
interact
