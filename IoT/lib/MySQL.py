import mysql.connector
import keys

def ConnectDB():
    db = mysql.connector.connect(host = 'localhost',
    user = keys.MYSQL_USER,
    passwd = keys.MYSQL_PASSWORD,
    database = keys.MYSQL_DATABASE_NAME
    )
    return db

db = ConnectDB()    
mycursor = db.cursor()

# Create database
def CreateDB(): 
    mycursor.execute('CREATE DATABASE ' + keys.MYSQL_DATABASE_NAME)

# Create table
def CreateTable():
    mycursor.execute("CREATE TABLE Sensor (name VARCHAR(50), type VARCHAR(50), data int, sensorID INT PRIMARY KEY AUTO_INCREMENT)")

# Insert data into table
def InsertDataToTable():
    mycursor.execute('INSERT INTO Sensor (name,type) VALUES (%s,%s)', ('UltraSonicSensor', 'Distance measure'))
    db.commit()

# Update data
def UpdateData():
    mycursor.execute('UPDATE Sensor SET data = 100 WHERE sensorID = 1')
    db.commit()

# Select a table
def SelectDataFromTable():
    mycursor.execute('SELECT * FROM Sensor')

# Remove a table
def DeleteTable():
    mycursor.execute('DROP TABLE Sensor')

# Loops through all data in the selected table
SelectDataFromTable()
for data in mycursor:
    print(data)
