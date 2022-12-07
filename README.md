# Xiaomi Mi Smart Pedestal Fan Android Remote

![icon](https://user-images.githubusercontent.com/29152432/196554368-636a4617-a4e0-40fc-bc91-93c1be8183fe.png)

## How to build
 - Clone this repository
 - Set you token and IP in [main.js](https://github.com/m0n4/Xiaomi-Mi-Smart-Pedestal-Fan-Android-Remote/blob/main/main.js)
 - Download the APK from the [release section](https://github.com/m0n4/Xiaomi-Mi-Smart-Pedestal-Fan-Android-Remote/releases/tag/Android) of your repository 

## Getting your token and IP 
provisioning the fan requires a mi cloud account  
- with the mi home app  
- with [miIO](https://github.com/aholstenson/miio):  
	log in https://i.mi.com/ and get your Xiaomi Account ID  
	put the fan in pairing mode  
	connect to its wifi  
	`$ miio discover`  
	`$ miiov configure 192.168.4.1 --ssid wifi2.4dHz --passwd 123456 --uid 1237890000`  
 
then simply use [Xiaomi Cloud Tokens Extractor](https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor) with the mi account credentials to retrieve the token and IP  

## Misc
 - Privacy-friendly application
 - Supports "pull to refresh"
 - Tested on Mi Smart Standing Fan 1C

## Screenshot
![preview](https://user-images.githubusercontent.com/29152432/196554333-df42539a-9c2d-44d9-9c1d-37ff2f3d567d.png)

## Credits
[Andreas Holstenson](https://github.com/aholstenson) for the miIO Device Library on which this application is based  
[Piotr Machowski](https://github.com/PiotrMachowski) for the Xiaomi Cloud Tokens Extractor
