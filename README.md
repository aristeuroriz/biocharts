Meteor IoT - (GSR - Galvanic Skin Response)

Features

Back-end

	1 - Reactive Variables (reactive-var);
	2 - IoT Admin Panel for CylonJS + Arduino (juliancwirko:caprica);
	3 - Meteor and CylonJS for Arduino (juliancwirko:arduino-cylon);
	4 - 


Front-end:

	1 - Bootstrap 3 (twbs:bootstrap);
	2 - Bootswatch Theme Flat UI (jss:flat-ui);
	3 - Sass (fourseven:scss);
	4 - Font Awesome (fortawesome:fontawesome);
	5 - Charts (maazalik:highcharts );


Directories Patterns:

```
client/                 # Client folder
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    	events/			# Events folder
    	helpers/		# Helpers folder
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # Sass files
    views/              # Contains all views(*)
collections/            # Model files, for each Meteor.Collection(*)
config/					# Config files commons between server-side and client-side
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/                 # Server folder
	config/				# Configuration files (on the server)
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
tests/					# All files from test suites
```