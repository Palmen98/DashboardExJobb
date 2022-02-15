import IoT.lib.keys as keys
import mysql.connector

config = {
    'host': 'localhost',
    'user': keys.MYSQL_USER,
    'passwd': keys.MYSQL_PASSWORD,
    'database': keys.MYSQL_DATABASE_NAME
}

def get_config():
    return config

def connect(): # connect to the mysql
    cnx = mysql.connector.connect(**config)
    return cnx, cnx.cursor()

def connectDB():
    db = mysql.connector.connect(host = 'localhost',
    user = keys.MYSQL_USER,
    passwd = keys.MYSQL_PASSWORD,
    database = keys.MYSQL_DATABASE_NAME
    )
    return db

cnx, cursor = connect()

# Create database
def createDB(): 
    cursor.execute('CREATE DATABASE ' + keys.MYSQL_DATABASE_NAME)

# Create table
def createTable():
    cursor.execute("CREATE TABLE Sensor (name VARCHAR(50), type VARCHAR(50), data int, sensorID INT PRIMARY KEY AUTO_INCREMENT)")

# Insert data into table
def insertDataToTable():
    cursor.execute('INSERT INTO Sensor (name,type) VALUES (%s,%s)', ('UltraSonicSensor', 'Distance measure'))
    cnx.commit()

# Update data
def updateData(data):
    cursor.execute('UPDATE Sensor SET data = $data WHERE sensorID = 1')
    cnx.commit()

# Select a table
def selectDataFromTable():
    cursor.execute('SELECT * FROM Sensor')

# Remove a table
def deleteTable():
    cursor.execute('DROP TABLE Sensor')

# Loops through all data in the selected table
selectDataFromTable()
for data in cursor:
    print(data)
