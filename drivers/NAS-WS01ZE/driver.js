'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {
		'alarm_water': {
			'command_class': 'COMMAND_CLASS_SENSOR_BINARY',
			'command_get': 'SENSOR_BINARY_GET',
			'command_report': 'SENSOR_BINARY_REPORT',
			'command_report_parser': report => report['Sensor Value'] === 'detected an event'
		},
		'alarm_battery': { 
    			'command_class': 'COMMAND_CLASS_BATTERY',
	    		'command_get': 'BATTERY_GET',
    			'command_report': 'BATTERY_REPORT',
    			'command_report_parser': (report, node) => { 
    				if(report.hasOwnProperty('Battery Level (Raw)')) {
    					if (report['Battery Level (Raw)'][0] == 255) {
    						return true
    						}
    					return false
   	        			}
   					}		
    	},
		'measure_battery': { 
    			//getOnWakeUp: true,
    			'command_class': 'COMMAND_CLASS_BATTERY',
	    		'command_get': 'BATTERY_GET',
    			'command_report': 'BATTERY_REPORT',
    			'command_report_parser': (report, node) => { 
    				if(report.hasOwnProperty('Battery Level (Raw)')) {
    					if(report['Battery Level (Raw)'][0] == 255) return 1;
        				return report['Battery Level (Raw)'][0];
						}
					return null;
    			}
    	}
	},
	settings: {
		"alarm_duration_time": {
			"index": 1,
			"size": 1,
		},
		"alarm_interval": {
			"index": 2,
			"size": 1,
		},
		"first_alarm_ontime": {
			"index": 3,
			"size": 1,
		},
		"first_alarm_duration": {
			"index": 4,
			"size": 1,
		},
		"alarm_sound_enable_disable": {
			"index": 5,
			"size": 1,
		},
		"sensor_enable_disable": {
			"index": 6,
			"size": 1,
		}
	}
});

module.exports.on('initNode', token => {
    const node = module.exports.nodes[token];
    if (node) {
        if (node.instance.CommandClass.COMMAND_CLASS_WAKE_UP) {
            node.instance.CommandClass.COMMAND_CLASS_WAKE_UP.on('report', (command, report) => {
                if (command.name === 'WAKE_UP_NOTIFICATION') {
                    // Retrieve 'Battery Level' upon wake-up; temp replacement of getOnWakeUp function (triggering on online event instead of Wake-up)
                    	node.instance.CommandClass['COMMAND_CLASS_BATTERY'].BATTERY_GET({});
                    // Option to retrieve the WAKE_UP_INTERVAL upon wake-up; for debugging only
                    	//node.instance.CommandClass['COMMAND_CLASS_WAKE_UP'].WAKE_UP_INTERVAL_GET({});
                    // Option to retrieve configuration of a certain parameter upon wake-up; for debugging only
                    	//node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET( {'Parameter Number': new Buffer([10])}, null );
                }
            });
        }
    }
});
