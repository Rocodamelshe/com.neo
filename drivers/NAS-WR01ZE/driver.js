"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');
http://products.z-wavealliance.org/products/1783

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {
		'onoff': {
			'command_class'				: 'COMMAND_CLASS_SWITCH_BINARY',
			'command_get'				: 'SWITCH_BINARY_GET',
			'command_set'				: 'SWITCH_BINARY_SET',
			'command_set_parser'		: function( value ){
				return {
					'Switch Value': value
				}
			},
			'command_report'			: 'SWITCH_BINARY_REPORT',
			'command_report_parser'		: function( report ){
				return report['Value'] === 'on/enable';
			}
		},
		'measure_power': {
			'command_class': 'COMMAND_CLASS_METER',
			'command_get': 'METER_GET',
			'command_get_parser': () => {
			return {
				'Properties1': {
				'Rate Type': 'Import',
				'Scale': 2
					},
					'Scale 2': 0
					};
				},
				'command_report': 'METER_REPORT',
				'command_report_parser': report => {
				if (report.hasOwnProperty('Properties2') &&
				report.Properties2.hasOwnProperty('Scale bits 10') &&
				report.Properties2['Scale bits 10'] === 2)
				return report['Meter Value (Parsed)'];
				return null;
				},
			},
		'meter_power': {
			'command_class': 'COMMAND_CLASS_METER',
			'command_get': 'METER_GET',
			'command_get_parser': () => {
			return {
				'Properties1': {
				'Rate Type': 'Import',
				'Scale': 0
					},
					'Scale 2': 0
					};
				},
				'command_report': 'METER_REPORT',
				'command_report_parser': report => {
				if (report.hasOwnProperty('Properties2') &&
				report.Properties2.hasOwnProperty('Size') &&
				report.Properties2['Size'] === 4 &&
				report.Properties2.hasOwnProperty('Scale bits 10') &&
				report.Properties2['Scale bits 10'] === 0)
				return report['Meter Value (Parsed)'];
				return null;
				},
			},
		'measure_voltage': {
			'command_class': 'COMMAND_CLASS_METER',
			'command_get': 'METER_GET',
			'command_get_parser': () => {
			return {
				'Properties1': {
				'Rate Type': 'Import',
				'Scale': 2
					},
					'Scale 2': 0
					};
				},
				'command_report': 'METER_REPORT',
				'command_report_parser': report => {
				if (report.hasOwnProperty('Properties2') &&
				report.Properties2.hasOwnProperty('Size') &&
				report.Properties2['Size'] === 2 &&
				report.Properties2.hasOwnProperty('Scale bits 10') &&
				report.Properties2['Scale bits 10'] === 0)
				return report['Meter Value (Parsed)'];
				return null;
				},
			},
		'measure_current': {
			'command_class': 'COMMAND_CLASS_METER',
			'command_get': 'METER_GET',
			'command_get_parser': () => {
			return {
				'Properties1': {
				'Rate Type': 'Import',
				'Scale': 2
					},
					'Scale 2': 0
					};
				},
				'command_report': 'METER_REPORT',
				'command_report_parser': report => {
				if (report.hasOwnProperty('Properties2') &&
				report.Properties2.hasOwnProperty('Size') &&
				report.Properties2['Size'] === 2 &&
				report.Properties2.hasOwnProperty('Scale bits 10') &&
				report.Properties2['Scale bits 10'] === 1)
				return report['Meter Value (Parsed)'];
				return null;
				},
			}
		},
	settings: {
                "meter_report": {
               		"index": 1,
                	"size": 1,
                	"parser": value => new Buffer([ ( value === true ) ? 1 : 0 ])
                  	},
				"meter_report_interval": {
                	"index": 2,
                	"size": 2
                	},
				"over_load_current": {
                	"index": 3,
                	"size": 1
                	},
				"alarm_current": {
                	"index": 4,
                	"size": 1
                	},
        		"led_display": {
                	"index": 5,
                	"size": 1,
                	"parser": value => new Buffer([ ( value === true ) ? 1 : 0 ])
                	},
        		"power_report_change": {
                	"index": 6,
                	"size": 1
                	},
				"remember_state": {
                	"index": 7,
                	"size": 1,
                	"signed": false,
                	},
				"time_switch_function": {
                	"index": 8,
                	"size": 1,
					"parser": value => new Buffer([ ( value === true ) ? 1 : 0 ])
                	},
				"time_switch_period": {
                	"index": 9,
                	"size": 2,
                	}
              }
})
