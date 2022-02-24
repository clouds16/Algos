import requests
import json
import schedule
import time


RTT =[]

def handleData():
    #Make get request from url
    response = requests.get("https://api.weather.gov/alerts/active")
    #Calculate Round 
    
    # roundTripTime = response.total_seconds()
    # RTT.append(roundTripTime)

    #Validate the response status code before parsing through the response data
    if response.status_code >=200 and response.status_code <300:

        #Convert the data into a json File
        convertedData = response.json()['features']

        #Filter through the list to find alerts and store the data into an array
        filteredAlerts = list(filter(lambda x: ( x['properties']['messageType'] == 'Alert'), convertedData))
        
        #Store the total amount of alerts
        alertCount = len(filteredAlerts)
        
        #Write the file into a json.file
        with open('weather.json','w') as json_file:
            json.dump(filteredAlerts, json_file)
        
        #Print The total amount of alert's
        print(f"The total amount of alert(s): {alertCount}")
    
    else:
        #Print the server response if the request failed
        print(f"Get request failed. The response from the server is: {response.status_code}")

handleData()

#Set up task scheduler to run every second and pass in function handleData

# schedule.every(1).seconds.do(handleData)


# while True:
#     schedule.run_pending()
#     time.sleep(1)