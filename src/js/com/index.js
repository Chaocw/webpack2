var $ = require('./jquery.js');
var Event = require('./event.js');
var Carousel = require('./carousel.js');
var GoTop = require('./gotop.js');
var waterFull = require('./waterFull.js');



	Carousel($('.carousel'));

	new GoTop();

	waterFull.start($('.load-container'));
