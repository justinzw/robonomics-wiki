(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{AFUh:function(s,t,a){"use strict";a.r(t);var r=a("KHd+"),e=a("UQSp"),n=a("Kw5r");function l(s){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}n.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},p=function(s){var t=s.options.components=s.options.components||{},a=s.options.computed=s.options.computed||{};Object.keys(o).forEach((function(s){"object"===l(o[s])&&"function"==typeof o[s].render?t[s]=o[s]:a[s]=function(){return o[s]}}))},v=n.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",i={excerpt:null,title:"Configuration Options Description"};var c=function(s){s.options[_]&&(s.options[_]=i),n.a.util.defineReactive(s.options,_,i),s.options.computed=v.computed({$frontmatter:function(){return s.options[_]}},s.options.computed)},h=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"configuration-options-description"}},[a("a",{attrs:{href:"#configuration-options-description","aria-hidden":"true"}},[s._v("#")]),s._v("Configuration Options Description")]),a("p",[s._v("Basically, you can think of the package as a black box with one input (sensor data) and many outputs.\nFor now only SDS011 sensor is supported, but if you are familiar with Python it'd be easy to add other sensors as well.")]),a("p",[s._v("Have a look at "),a("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/blob/master/config/default.yaml",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("configuration")]),s._v(" file:")]),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Please DO NOT edit this file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Make a copy instead, make changes and pass the absolute path to the copy in arguments")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("general:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("publish_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# time between two published messages")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("comstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("port:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/dev/ttyUSB0"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# COM port of the device")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("work_period:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# time between two measurements in seconds")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geo:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("               "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Geo coordinates as latitude,longitude")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("public_key:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# If not provided, COMStation creates itself")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tcpstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0.0.0:31313"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# IP and PORT to listen to, 0.0.0.0:31313 means available for everyone")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("acl:")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# list of known addresses. If not specified accepts from everyone")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# -")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# -")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("luftdaten:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# whether or not publish to https://luftdaten.info/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("robonomics:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# enable use of Robonomics Network")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_provider:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/ip4/127.0.0.1/tcp/5001/http"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# ipfs endpoint")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_topic:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"airalab.lighthouse.5.robonomics.eth"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datalog:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("         "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# enable use of Datalog Robonomics subcommand")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("              "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# path to Robonomics execution file")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("suri:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("              "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# private key of publisher account")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("remote:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wss://substrate.ipci.io"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dump_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3600")]),s._v("   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# time between two transactions in seconds")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_username:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Temporal.Cloud credentials")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_password:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dev:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sentry:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')])])]),a("p",[s._v("At the moment it's possible to publish data to "),a("a",{attrs:{href:"https://luftdaten.info/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Luftdaten")]),s._v(", "),a("a",{attrs:{href:"https://robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Robonomics Network")]),s._v(" and "),a("a",{attrs:{href:"https://github.com/airalab/robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Datalog")]),s._v(".\nThe last one is experimental!")]),a("blockquote",[a("p",[s._v("DO NOT edit "),a("code",{pre:!0},[s._v("config/default.yaml")]),s._v(" file. Instead make a copy")])]),a("p",[s._v("Play around with the configuration!")]),a("p",[s._v("Explanation of options:")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Field")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("general/publish_interval")])]),a("td",[s._v("integer number from 1 and above. Tells how often send measurements. Keep in mind that if measurements from sensors come less often than this number connectivity sends last data")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("comstation/enable")])]),a("td",[s._v("true/false. Enabling/disabling the station")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("comstation/port")])]),a("td",[s._v("valid path to com port, for example "),a("code",{pre:!0},[s._v("/dev/ttyUSB0")]),s._v(". It is where a sensor is connected to")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("comstation/work_period")])]),a("td",[s._v("integer from 0 to 1800. For SDS011 sensor 0 means continuous work. Recommended period is 300 seconds")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("comstation/geo")])]),a("td",[a("code",{pre:!0},[s._v("lat,lon")]),s._v(" a string with two floats separated by a comma. It represents latitude and longitude of a sensor")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("comstation/public_key")])]),a("td",[s._v("Ed25519 verifying key in hex format. If not provided connectivity generates a new one")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("tcpstation/enable")])]),a("td",[s._v("true/false. Enabling/disabling the station")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("tcpstation/address")])]),a("td",[s._v("what address and port listen to. If you are willing to make it open for external connections put "),a("code",{pre:!0},[s._v("0.0.0.0")]),s._v(" as an address. "),a("code",{pre:!0},[s._v("31313")]),s._v(" is a port chosen by the developers. You can pick any port you want, but don't forget to change the port in an ESP firmware.")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("tcpstation/acl")])]),a("td",[s._v("a list of known public keys in hex format")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("luftdaten/enable")])]),a("td",[s._v("true/false. Whether or not publish data to "),a("a",{attrs:{href:"https://devices.sensor.community/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Luftdaten")]),s._v(". Don't forget to register the sensor's mac address on the site")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("robonomics/enable")])]),a("td",[s._v("true/false. Whether or not publish data to IPFS topic according to Robonomics communication protocol")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("robonomics/ipfs_proveder")])]),a("td",[s._v("an endpoint for IPFS daemon. By default it's "),a("code",{pre:!0},[s._v("/ip4/127.0.0.1/tcp/5001/http")]),s._v(" that means local daemon. The endpoint must by in multiaddr format. For example for "),a("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Infura.io")]),s._v(" it would be "),a("code",{pre:!0},[s._v("/dns/ipfs.infura.io/tcp/5001/https")])])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("robonomics/ipfs_topic")])]),a("td",[s._v("IPFS topic's name. If you want to use "),a("a",{attrs:{href:"https://sensors.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("DApp")]),s._v(" provided by Robonomics team leave it untouched")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("datalog/enable")])]),a("td",[s._v("true/false. Enable/Disable saving log to "),a("a",{attrs:{href:"https://ui.ipci.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Robonomics on Substrate chain")])])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("datalog/path")])]),a("td",[s._v("full path to "),a("code",{pre:!0},[s._v("robonomics")]),s._v(" executable file. You can find the latest release on "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("this")]),s._v(" page")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("datalog/suri")])]),a("td",[s._v("a private key from substrate chain account")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("datalog/remote")])]),a("td",[s._v("an endpoint to substrate instance")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("datalog/dump_interval")])]),a("td",[s._v("specify a period of time for collecting log in seconds")])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("datalog/temporal_username")])]),a("td",[s._v("set username to upload files to "),a("a",{attrs:{href:"https://temporal.cloud/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Temporal.Cloud")])])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("detalog/temporal_password")])]),a("td",[s._v("set passward to upload files to "),a("a",{attrs:{href:"https://temporal.cloud/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Temporal.Cloud")])])]),a("tr",[a("td",[a("code",{pre:!0},[s._v("dev/sentry")])]),a("td",[s._v("for development purpose. If you have a "),a("a",{attrs:{href:"https://sentry.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Sentry.io")]),s._v(" account you can put sentry's credentials in here")])])])]),a("h2",{attrs:{id:"scenario-1-connect-sds011-to-serial-port"}},[a("a",{attrs:{href:"#scenario-1-connect-sds011-to-serial-port","aria-hidden":"true"}},[s._v("#")]),s._v("Scenario #1: Connect SDS011 to serial port")]),a("p",[s._v("The easiest and the most straightforward way to connect your sensor to the network is using the serial port")]),a("p",[s._v("Connect you SDS011 sensor to a USB port, let's assume it got "),a("code",{pre:!0},[s._v("/dev/ttyUSB0")]),s._v(" address")]),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("general:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("publish_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("comstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("port:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/dev/ttyUSB0"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("work_period:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("      \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geo:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"59.944954,30.294534"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("public_key:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tcpstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0.0.0:31313"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("acl:")]),s._v("                  \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("luftdaten:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("robonomics:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_provider:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/ip4/127.0.0.1/tcp/5001/http"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_topic:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"airalab.lighthouse.5.robonomics.eth"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datalog:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("         \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("              \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("suri:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("              \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("remote:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wss://substrate.ipci.io"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dump_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3600")]),s._v("   \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_username:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_password:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dev:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sentry:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')])])]),a("h2",{attrs:{id:"scenario-2-connect-sds011-via-tcp"}},[a("a",{attrs:{href:"#scenario-2-connect-sds011-via-tcp","aria-hidden":"true"}},[s._v("#")]),s._v("Scenario #2: Connect SDS011 via TCP")]),a("h3",{attrs:{id:"esp-board-preparation"}},[a("a",{attrs:{href:"#esp-board-preparation","aria-hidden":"true"}},[s._v("#")]),s._v("ESP Board Preparation")]),a("p",[s._v("First you need to generate a signing/verifying keys pair and upload the firmware. Go to "),a("a",{attrs:{href:"iot-firmware-upload"}},[s._v("Firmware Upload")])]),a("h3",{attrs:{id:"connectivity-configuration"}},[a("a",{attrs:{href:"#connectivity-configuration","aria-hidden":"true"}},[s._v("#")]),s._v("Connectivity Configuration")]),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("general:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("publish_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("comstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("port:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/dev/ttyUSB0"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("work_period:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("      \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geo:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"59.944954,30.294534"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("public_key:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tcpstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0.0.0:31313"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("acl:")]),s._v("                  \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("luftdaten:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("robonomics:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_provider:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/ip4/127.0.0.1/tcp/5001/http"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_topic:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"airalab.lighthouse.5.robonomics.eth"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datalog:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("         \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("              \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("suri:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("              \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("remote:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wss://substrate.ipci.io"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dump_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3600")]),s._v("   \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_username:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_password:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dev:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sentry:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')])])]),a("blockquote",[a("p",[s._v("Do not forget to open the port in system firewall")]),a("p",[s._v("On NixOS you can do:")]),a("pre",[a("code",{pre:!0},[s._v("networking.firewall.allowedTCPPorts = [ 31313 ];\n")])])]),a("h2",{attrs:{id:"scenario-3-connect-multiple-sensors-and-publish-to-datalog"}},[a("a",{attrs:{href:"#scenario-3-connect-multiple-sensors-and-publish-to-datalog","aria-hidden":"true"}},[s._v("#")]),s._v("Scenario #3: Connect Multiple Sensors and Publish to Datalog")]),a("p",[s._v("In order to upload a firmware to ESP board read "),a("a",{attrs:{href:"#esp-board-preparation"}},[s._v("ESP Board Preparation")]),s._v(" section.")]),a("h3",{attrs:{id:"install-robonomics"}},[a("a",{attrs:{href:"#install-robonomics","aria-hidden":"true"}},[s._v("#")]),s._v("Install Robonomics")]),a("p",[s._v("From "),a("code",{pre:!0},[s._v("root")]),s._v(" user do:")]),a("pre",[a("code",{pre:!0},[s._v('echo "https://github.com/airalab/airapkgs/archive/nixos-unstable.tar.gz nixos" > /root/.nix-channels\nnix-channel --update\n')])]),a("p",[s._v("Then edit "),a("code",{pre:!0},[s._v("/etc/nixos/configuration.nix")]),s._v(" and add:")]),a("pre",[a("code",{pre:!0},[s._v("...\n  environment.systemPackages = with pkgs; [\n        substrate-node-robonomics-bin\n  ];\n...\n")])]),a("p",[s._v("Run rebuild and find out where "),a("code",{pre:!0},[s._v("robonomics")]),s._v(" is:")]),a("pre",[a("code",{pre:!0},[s._v("nixos-rebuild switch\nwhereis robonomics\n")])]),a("p",[s._v("Let's assume you got the following path: "),a("code",{pre:!0},[s._v("/nix/store/2gz2ik17w5xad8w819bsb05a23pbjbya-system-path/bin/robonomics")])]),a("h3",{attrs:{id:"configuration"}},[a("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[s._v("#")]),s._v("Configuration")]),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("general:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("publish_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("comstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("port:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/dev/ttyUSB0"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("work_period:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("      \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geo:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"59.944954,30.294534"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("public_key:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tcpstation:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0.0.0:31313"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("acl:")]),s._v("                  \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("luftdaten:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("robonomics:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_provider:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/ip4/127.0.0.1/tcp/5001/http"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ipfs_topic:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"airalab.lighthouse.5.robonomics.eth"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datalog:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enable:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/nix/store/2gz2ik17w5xad8w819bsb05a23pbjbya-system-path/bin/robonomics"')]),s._v("              \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("suri:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0x..."')]),s._v("              \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("remote:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wss://substrate.ipci.io"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dump_interval:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3600")]),s._v("   \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_username:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"temporaluser"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# optional ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("temporal_password:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"temporalpass"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# optional")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dev:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sentry:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')])])])])}),[],!1,null,null,null);"function"==typeof p&&p(h),"function"==typeof c&&c(h);t.default=h.exports},UQSp:function(s,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(s){return s("div",null,this.$slots.default)}}}}]);