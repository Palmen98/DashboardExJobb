import mysql.connector
import Keys as keys

db=mysql.connector.connect(host = 'localhost',
    user = keys.MYSQL_USER,
    passwd = keys.MYSQL_PASSWORD,
    database = keys.MYSQL_DATABASE_NAME
)


mycursor = db.cursor()


# Create database
# mycursor.execute('CREATE DATABASE ' + keys.MYSQL_DATABASE_NAME)

# Create table
# mycursor.execute("CREATE TABLE Sensor (name VARCHAR(50), type VARCHAR(50), data int, sensorID INT PRIMARY KEY AUTO_INCREMENT)")

# Create 
# mycursor.execute('INSERT INTO Sensor (name,type) VALUES (%s,%s)', ('UltraSonicSensor', 'Distance measure'))
# db.commit()

# Update
# mycursor.execute('UPDATE Sensor SET data = 100 WHERE sensorID = 1')
# db.commit()

# Select a table
# mycursor.execute('SELECT * FROM Sensor')

# Remove a table
# mycursor.execute('DROP TABLE Sensor')

# Loops through all data in table
# for x in mycursor:
#     print(x)
