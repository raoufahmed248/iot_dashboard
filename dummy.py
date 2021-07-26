import requests
import math
import random
import time
def truncate(number, digits) -> float:
    stepper = 10.0 ** digits
    return math.trunc(stepper * number) / stepper

random.seed()

while 1:
    tempNum = random.uniform(0.5, 50.0)
    tempNum = truncate(tempNum,2)
    payloadLocation = {'lat':tempNum,'lng':tempNum}
    payloadHumidity = {'humidity':tempNum}
    payloadTemp = {'temperature':tempNum}
    payloadPressure = {'pressure':tempNum}
    
    session = requests.Session()
    session.post('http://localhost:8000/locations/',data=payloadLocation)
    session.post('http://localhost:8000/temperatures/',data=payloadTemp)
    session.post('http://localhost:8000/pressures/',data=payloadPressure)
    session.post('http://localhost:8000/humidities/',data=payloadHumidity)
    time.sleep(5)

    


