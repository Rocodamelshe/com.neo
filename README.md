# SZ Neo Coolcam device support App for Homey @ Athom.com
Makes Homey work with these great and cheap Chinese z-wave products

## Supported devices with most common parameters:
* NAS-PD01ZE, Motion Sensor
* NAS-WR01ZE, Power Switching Plug
* NAS-SW01ZE, Touch Wall Switch
* NAS-AB01ZE, Siren / Doorbell speaker
* NAS-DS01ZE, Door Sensor
* NAS-WS01ZE, Flood Sensor


## Supported devices with some parameters:
None until Neo releases new products

## Supported Languages:
* English
* Dutch

## Support notes:
Most reliable way to update battery powered devices   
1. Place the sensor near Homey (< 1 meter)   
2. Change the settings to the values you want   
3. Wake up the sensor (triple click the button)   
4. During the blinking of the LED (indicating connection to Homey) press "save settings"   

If problems persists:    
a. Temporarely disable other Z-wave apps   
b. change the setting to another value with above steps   
c. check if effective and retry to the desired value    

## Change Log:

### v 1.1.10
**update:**    
NAS-AB01ZE - Add battery alarm and updated battery reporting    
NAS-DS01ZE - Add battery alarm and updated battery reporting   
NAS-PD01ZE - Add battery alarm and updated battery reporting   
NAS-WS01ZE - Add battery alarm and updated battery reporting    
NAS-WR01ZE - re-added custom capabilities due to delays on Homey v1.1.3   

**notes:**   
In order to make use of the battery alarm functionality, re-pair of device is required.    
Battery reporting should work after app / driver update

### v 1.1.9 - ~~You need homey firmware 1.1.3 or higher~~
**add support:**   
NAS-SW01ZE - Touch Wall Switch Support Added    
**notes:**   
NAS-SW01ZE - Untested because no hardware available yet
Please contact me on slack @m-ruiter or mail to debug further if something is not working correct with this switch    

**update:**    
NAS-AB01ZE - All settings added so the siren can also be used as doorbell speaker    
NAS-DS10ZE - All settings added    
~~NAS-WR01ZE - Removed custom capabilities as they are now part of the default Homey capabilities~~

### v 1.1.8   
**add support:**      
NAS-SW01ZE - Touch Wall Switch Support Added
note: Untested because no hardware available yet
Please contact me on slack or mail to debug further if something is not working correct with this switch

**fixed:**    
NAS-AB01ZE - Fixed a flow card error in the driver

### v 1.1.7      
**update:**   
NAS-PD01ZE - Fixed LUX reporting based on threshold setting     
NAS-PD01ZE - Added battery alarm trigger card    
NAS-PD01ZE - Regrouping settings based on function + textual updates settings / labels / hints   
NAS-WR01ZE - Regrouping settings based on function + textual updates settings / labels / hints   

**notes:**   
NAS-PD01ZE - LUX reporting based on interval setting is not working; under clarification with manufacturer   

### v 1.1.6 
**update:**   
NAS-WR01ZE - Updated mobile card & insights logging to include current and voltage   
Z-Wave Driver (v1.1.2)   

**notes:**   
re-pair of Power Plug required to make use of current and voltage reporting capabilities   

### v 1.1.5
**add support:**   
NAS-WR01ZE - Additional settings implemented (e.g. over-load current, alarm current, time switch function)   

**update:**     
NAS-WR01ZE - Bug fixes defaultConfiguration and parameters, implementation of power consumption (kWh)   
NAS-WR01ZE - textual fixes (setting-labels, -hints and association group-hints)

-------------

Older changelog notes have been ereased from this timeline...... 
