# Setting up Ubuntu for the first time

## Connecting to the internet
1. Click on the wifi icon
2. Select Edit Connections
3. Select rpi_wpa2 and click Edit
4. Go to the Wifi Security Tab
   * Set Security to WPA & WPA2 Enterprise
   * Set Authentication to Protected EAP (PEAP)
   * Choose No CA Certificate is required
   * Inner Authentication set to MSCHAPv2
   * Input your RPI username and password

## Using "sudo apt-get install < package_name >"
1. Search and open System Settings
2. Open Software and Updates
3. Check the checkbox next to the following:
  * Canocial-supported free and open-source software(main)
  * Community-maintained free and open-source software(universe)
  * Proprietary drivers for devices (restricted)
  * Software restricted by copyright or legal issues (multiverse)
4. Open a terminal and run: sudo apt-get update
5. To install any additional programs type sudo apt-get install < package_name >
