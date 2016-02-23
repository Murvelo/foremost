var express = require('express');
var router = express.Router();
var appdata = require('../jlupes2.json');
var otherdata = require('../promostuff.json');
var extended = require('../data.json');
var sourced = require('../sources.json');

/* GET home page */
router.get('/' , function(req, res) {
	var myArtwork = [ ] ;
	var myArtists = [ ] ;
	myArtists = appdata.speakers;
	appdata.speakers.forEach(function(item) {
		myArtwork = myArtwork.concat(item.artwork);
	});
	var myPromoNest = [ ] ;
	var myPromo = [ ] ;
	myPromo = otherdata.speakers;
	otherdata.speakers.forEach(function(item) {
		myPromoNest = myPromoNest.concat(item.artwork);
	});
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	var source = [ ] ;
	var sources = [ ] ;
	source = sourced.speakers;
	sourced.speakers.forEach(function(item) {
		sources = sources.concat(item.artwork);
	});
	res.render('index' , {
		title: 'Home' ,
		artwork: myArtwork,
		artists : myArtists,
		promonest : myPromoNest,
		promo : myPromo,
		xtended : extendhouse,
		xtend : extend,
		sauce : source,
		saucy : sources
	});
});




/* GET astronomy page */
router.get('/astronomy' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('astronomy' , {
		title: 'astronomy' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET chemistry page */
router.get('/chemistry' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('chemistry' , {
		title: 'chemistry' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET history page */
router.get('/history' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('history' , {
		title: 'history' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET life page */
router.get('/life' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('life' , {
		title: 'life' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET mathntech page */
router.get('/mathntech' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('mathntech' , {
		title: 'mathntech' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET physics page */
router.get('/physics' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('physics' , {
		title: 'physics' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET planetary page */
router.get('/planetary' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('planetary' , {
		title: 'planetary' ,
		xtended : extendhouse,
		xtend : extend
	});
});


/* GET sociology page */
router.get('/sociology' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('sociology' , {
		title: 'sociology' ,
		xtended : extendhouse,
		xtend : extend
	});
});



/* GET publications page */
router.get('/publications' , function(req, res) {
	var extendhouse = [ ] ;
	var extend = [ ] ;
	extend = extended.speakers;
	extended.speakers.forEach(function(item) {
		extendhouse = extendhouse.concat(item.artwork);
	});
	res.render('publications' , {
		title: 'publications' ,
		xtended : extendhouse,
		xtend : extend
	});
});


module.exports = router;