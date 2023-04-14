(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['imgixVideoParameters'] = factory();
  }
}(this, function () {

return {
	"version": "1.3.0",
	"parameters": {
		"fm": {
			"display_name": "output format",
			"category": "format",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"hls"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/video/url/format/fm",
			"short_description": "Changes the format of the output video."
		},
		"res": {
			"display_name": "resolution",
			"category": "format",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"high",
						"medium",
						"low"
					]
				}
			],
			"depends": [
				"fm=mp4",
				"format=mp4"
			],
			"url": "https://docs.imgix.com/apis/video/url/format/res",
			"short_description": "Changes the resolution of the video."
		},
		"vdl": {
			"display_name": "video download",
			"category": "format",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string"
				}
			],
			"aliases": [
				"video-download"
			],
			"url": "https://docs.imgix.com/apis/video/url/format/vdl",
			"short_description": "Forces a video URL to use send-file in its response."
		},
		"video-generate": {
			"display_name": "frame generation",
			"category": "format",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"thumbnail",
						"gif",
						"storyboard"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/video/url/format/video-generate",
			"short_description": "Generates a thumbnail, GIF, or storyboard from a video"
		},
		"video-gif-fps": {
			"display_name": "gif frames per second",
			"category": "gif",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 15,
						"max": 30
					}
				}
			],
			"depends": [
				"video-generate=gif"
			],
			"url": "https://docs.imgix.com/apis/video/url/gif/video-gif-fps",
			"short_description": "Sets the FPS for a GIF"
		},
		"video-gif-time-end": {
			"display_name": "gif time end",
			"category": "gif",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"video-generate=gif"
			],
			"url": "https://docs.imgix.com/apis/video/url/gif/video-gif-time-end",
			"short_description": "Generates a GIF from a video based on end time"
		},
		"video-gif-time-start": {
			"display_name": "gif time start",
			"category": "gif",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"video-generate=gif"
			],
			"url": "https://docs.imgix.com/apis/video/url/gif/video-gif-time-start",
			"short_description": "Generates a GIF from a video based on start time"
		},
		"video-storyboard-format": {
			"display_name": "storyboard format",
			"category": "storyboard",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"vtt",
						"jpg",
						"png",
						"json"
					]
				}
			],
			"depends": [
				"video-generate=storyboard"
			],
			"url": "https://docs.imgix.com/apis/video/url/storyboard/video-storyboard-format",
			"short_description": "Returns a storyboard format"
		},
		"video-thumbnail-time": {
			"display_name": "thumbnail frame selection",
			"category": "thumbnail",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"thumbnail"
					]
				}
			],
			"depends": [
				"video-generate=thumbnail"
			],
			"url": "https://docs.imgix.com/apis/video/url/thumbnail/video-thumbnail-time",
			"short_description": "Generates a thumbnail from a video based on time"
		}
	},
	"deprecatedParameters": {},
	"experimentalParameters": {},
	"aliases": {
		"video-download": "vdl"
	},
	"categoryValues": [
		"format",
		"gif",
		"storyboard",
		"thumbnail",
		"video-frame"
	],
	"colorKeywordValues": [
		"aliceblue",
		"antiquewhite",
		"aqua",
		"aquamarine",
		"azure",
		"beige",
		"bisque",
		"black",
		"blanchedalmond",
		"blue",
		"blueviolet",
		"brown",
		"burlywood",
		"cadetblue",
		"chartreuse",
		"chocolate",
		"coral",
		"cornflowerblue",
		"cornsilk",
		"crimson",
		"cyan",
		"darkblue",
		"darkcyan",
		"darkgoldenrod",
		"darkgray",
		"darkgreen",
		"darkgrey",
		"darkkhaki",
		"darkmagenta",
		"darkolivegreen",
		"darkorange",
		"darkorchid",
		"darkred",
		"darksalmon",
		"darkseagreen",
		"darkslateblue",
		"darkslategray",
		"darkslategrey",
		"darkturquoise",
		"darkviolet",
		"deeppink",
		"deepskyblue",
		"dimgray",
		"dimgrey",
		"dodgerblue",
		"firebrick",
		"floralwhite",
		"forestgreen",
		"fuchsia",
		"gainsboro",
		"ghostwhite",
		"gold",
		"goldenrod",
		"gray",
		"green",
		"greenyellow",
		"grey",
		"honeydew",
		"hotpink",
		"imgixorange",
		"imgixblue",
		"indianred",
		"indigo",
		"ivory",
		"khaki",
		"lavender",
		"lavenderblush",
		"lawngreen",
		"lemonchiffon",
		"lightblue",
		"lightcoral",
		"lightcyan",
		"lightgoldenrodyellow",
		"lightgray",
		"lightgreen",
		"lightgrey",
		"lightpink",
		"lightsalmon",
		"lightseagreen",
		"lightskyblue",
		"lightslategray",
		"lightslategrey",
		"lightsteelblue",
		"lightyellow",
		"lime",
		"limegreen",
		"linen",
		"magenta",
		"maroon",
		"mediumaquamarine",
		"mediumblue",
		"mediumorchid",
		"mediumpurple",
		"mediumseagreen",
		"mediumslateblue",
		"mediumspringgreen",
		"mediumturquoise",
		"mediumvioletred",
		"midnightblue",
		"mintcream",
		"mistyrose",
		"moccasin",
		"navajowhite",
		"navy",
		"oldlace",
		"olive",
		"olivedrab",
		"orange",
		"orangered",
		"orchid",
		"palegoldenrod",
		"palegreen",
		"paleturquoise",
		"palevioletred",
		"papayawhip",
		"peachpuff",
		"peru",
		"pink",
		"plum",
		"powderblue",
		"purple",
		"rebeccapurple",
		"red",
		"rosybrown",
		"royalblue",
		"saddlebrown",
		"salmon",
		"sandybrown",
		"seagreen",
		"seashell",
		"sienna",
		"silver",
		"skyblue",
		"slateblue",
		"slategray",
		"slategrey",
		"snow",
		"springgreen",
		"steelblue",
		"tan",
		"teal",
		"thistle",
		"tomato",
		"turquoise",
		"violet",
		"wheat",
		"white",
		"whitesmoke",
		"yellow",
		"yellowgreen"
	],
	"fontValues": [
		"serif",
		"sans-serif",
		"monospace",
		"cursive",
		"fantasy",
		"serif,bold",
		"sans-serif,bold",
		"monospace,bold",
		"fantasy,bold",
		"serif,italic",
		"sans-serif,italic",
		"monospace,italic",
		"serif,bold,italic",
		"sans-serif,bold,italic",
		"monospace,bold,italic",
		"American Typewriter",
		"American Typewriter Condensed",
		"American Typewriter Condensed Light",
		"American Typewriter Condensed,Bold",
		"American Typewriter Light",
		"American Typewriter,Bold",
		"AndaleMono",
		"Arial Narrow",
		"Arial Narrow,Bold",
		"Arial Narrow,BoldItalic",
		"Arial Narrow,Italic",
		"Arial Rounded MT,Bold",
		"Arial UnicodeMS",
		"Arial,BoldItalicMT",
		"Arial,BoldMT",
		"Arial,ItalicMT",
		"Arial-Black",
		"ArialMT",
		"Athelas,Bold",
		"Athelas,BoldItalic",
		"Athelas,Italic",
		"Athelas-Regular",
		"Avenir Next Condensed Demi,Bold",
		"Avenir Next Condensed Demi,BoldItalic",
		"Avenir Next Condensed Heavy",
		"Avenir Next Condensed Heavy,Italic",
		"Avenir Next Condensed Medium",
		"Avenir Next Condensed Medium,Italic",
		"Avenir Next Condensed Regular",
		"Avenir Next Condensed Ultra Light",
		"Avenir Next Condensed Ultra Light,Italic",
		"Avenir Next Condensed,Bold",
		"Avenir Next Condensed,BoldItalic",
		"Avenir Next Condensed,Italic",
		"Avenir Next Demi,Bold",
		"Avenir Next Demi,BoldItalic",
		"Avenir Next Heavy",
		"Avenir Next Heavy,Italic",
		"Avenir Next Medium",
		"Avenir Next Medium,Italic",
		"Avenir Next Regular",
		"Avenir Next Ultra Light",
		"Avenir Next Ultra Light,Italic",
		"Avenir Next,Bold",
		"Avenir Next,BoldItalic",
		"Avenir Next,Italic",
		"Avenir-Black",
		"Avenir-BlackOblique",
		"Avenir-Book",
		"Avenir-BookOblique",
		"Avenir-Heavy",
		"Avenir-HeavyOblique",
		"Avenir-Light",
		"Avenir-LightOblique",
		"Avenir-Medium",
		"Avenir-MediumOblique",
		"Avenir-Oblique",
		"Avenir-Roman",
		"Baskerville",
		"Baskerville,Bold",
		"Baskerville,BoldItalic",
		"Baskerville,Italic",
		"BigCaslon-Medium",
		"BrushScriptMT",
		"Chalkboard",
		"Chalkboard SE Light",
		"Chalkboard SE Regular",
		"Chalkboard SE,Bold",
		"Chalkboard,Bold",
		"Chalkduster",
		"CharcoalCY",
		"Charter Black,Italic",
		"Charter,Bold",
		"Charter,BoldItalic",
		"Charter,Italic",
		"Charter-Black",
		"Charter-Roman",
		"Cochin",
		"Cochin,Bold",
		"Cochin,BoldItalic",
		"Cochin,Italic",
		"Comic Sans MS,Bold",
		"ComicSansMS",
		"Copperplate",
		"Copperplate,Bold",
		"Copperplate-Light",
		"Courier",
		"Courier New,Bold",
		"Courier New,BoldItalic",
		"Courier New,Italic",
		"Courier,Bold",
		"Courier-Oblique",
		"CourierNewPSMT",
		"DIN Alternate,Bold",
		"DIN Condensed,Bold",
		"Didot",
		"Didot,Bold",
		"Didot,Italic",
		"Futura Medium,Italic",
		"Futura-CondensedMedium",
		"Futura-Medium",
		"Geneva",
		"GenevaCyr",
		"Georgia",
		"Georgia,Bold",
		"Georgia,BoldItalic",
		"Georgia,Italic",
		"Gill Sans",
		"Gill Sans Light,Italic",
		"Gill Sans,Bold",
		"Gill Sans,BoldItalic",
		"Gill Sans,UltraBold",
		"GillSans,Italic",
		"GillSans-Light",
		"Helvetica",
		"Helvetica CY,Bold",
		"Helvetica Neue",
		"Helvetica Neue Condensed Black",
		"Helvetica Neue Condensed,Bold",
		"Helvetica Neue Light",
		"Helvetica Neue Light,Italic",
		"Helvetica Neue Medium",
		"Helvetica Neue Medium,Italic",
		"Helvetica Neue Thin",
		"Helvetica Neue Thin,Italic",
		"Helvetica Neue UltraLight",
		"Helvetica Neue UltraLight,Italic",
		"Helvetica Neue,Bold",
		"Helvetica Neue,BoldItalic",
		"Helvetica Neue,Italic",
		"Helvetica,Bold",
		"Helvetica-Light",
		"Helvetica-LightOblique",
		"Helvetica-Oblique",
		"HelveticaCY-Oblique",
		"HelveticaCY-Plain",
		"Herculanum",
		"Hoefler Text Black,Italic",
		"Hoefler Text,Italic",
		"HoeflerText-Black",
		"HoeflerText-Ornaments",
		"HoeflerText-Regular",
		"Impact",
		"Iowan Old Style Black,Italic",
		"Iowan Old Style,Bold",
		"Iowan Old Style,BoldItalic",
		"Iowan Old Style,Italic",
		"IowanOldStyle-Black",
		"IowanOldStyle-Roman",
		"IowanOldStyle-Titling",
		"Lucida Grande",
		"Lucida Grande,Bold",
		"Marion,Bold",
		"Marion,Italic",
		"Marion-Regular",
		"Marker Felt Thin",
		"Marker Felt Wide",
		"Menlo,Bold",
		"Menlo,BoldItalic",
		"Menlo,Italic",
		"Menlo-Regular",
		"Monaco",
		"Noteworthy,Bold",
		"Noteworthy-Light",
		"Optima,Bold",
		"Optima,BoldItalic",
		"Optima,Italic",
		"Optima-ExtraBlack",
		"Optima-Regular",
		"PT Mono,Bold",
		"PT Sans Caption,Bold",
		"PT Sans Narrow,Bold",
		"PT Sans,Bold",
		"PT Sans,BoldItalic",
		"PT Sans,Italic",
		"PT Serif Caption,Italic",
		"PT Serif,Bold",
		"PT Serif,BoldItalic",
		"PT Serif,Italic",
		"PTMono-Regular",
		"PTSans-Caption",
		"PTSans-Narrow",
		"PTSans-Regular",
		"PTSerif-Caption",
		"PTSerif-Regular",
		"Palatino,Bold",
		"Palatino,BoldItalic",
		"Palatino,Italic",
		"Palatino-Roman",
		"Papyrus",
		"Papyrus-Condensed",
		"PlantagenetCherokee",
		"STBaoli-SC-Regular",
		"STYuanti-SC-Light",
		"STYuanti-SC-Regular",
		"SavoyeLetPlain",
		"Seravek",
		"Seravek ExtraLight, Italic",
		"Seravek Light,Italic",
		"Seravek Medium,Italic",
		"Seravek,Bold",
		"Seravek,BoldItalic",
		"Seravek,Italic",
		"Seravek-ExtraLight",
		"Seravek-Light",
		"Seravek-Medium",
		"Skia-Regular",
		"Skia-Regular_Black",
		"Skia-Regular_Black-Condensed",
		"Skia-Regular_Black-Extended",
		"Skia-Regular_Condensed",
		"Skia-Regular_Extended",
		"Skia-Regular_Light",
		"Skia-Regular_Light-Condensed",
		"Skia-Regular_Light-Extended",
		"Snell Roundhand,Bold",
		"SnellRoundhand",
		"SnellRoundhand-Black",
		"Superclarendon Black,Italic",
		"Superclarendon Light,Italic",
		"Superclarendon,Bold",
		"Superclarendon,BoldItalic",
		"Superclarendon,Italic",
		"Superclarendon-Black",
		"Superclarendon-Light",
		"Superclarendon-Regular",
		"Tahoma",
		"Tahoma,Bold",
		"Times New Roman,Bold",
		"Times New Roman,BoldItalic",
		"Times New Roman,Italic",
		"Times,Bold",
		"Times,BoldItalic",
		"Times,Italic",
		"Times-Roman",
		"TimesNewRomanPSMT",
		"Trebuchet MS,Bold",
		"Trebuchet MS,BoldItalic",
		"Trebuchet MS,Italic",
		"TrebuchetMS",
		"Verdana",
		"Verdana,Bold",
		"Verdana,BoldItalic",
		"Verdana,Italic",
		"Waseem",
		"WaseemLight",
		"Webdings",
		"Wingdings-Regular",
		"Wingdings2",
		"Wingdings3",
		"Yuanti SC,Bold",
		"YuppySC-Regular",
		"Zapf Dingbats",
		"Zapfino"
	]
};

}));
