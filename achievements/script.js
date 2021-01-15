  function fitZoom() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.Width;
    if(width >= 876) {
	 document.write('<style>body {-moz-transform: scale(1, 1); zoom: 1; zoom: 1;}</style>');
	}
	else if (width >= 776) {
	 document.write('<style>body {-moz-transform: scale(0.85, 0.85); zoom: 0.85; zoom: 85%;}</style>');
	}
	else if (width >= 676) {
	 document.write('<style>body {-moz-transform: scale(0.65, 0.65); zoom: 0.65; zoom: 65%;}</style>');
	}
	else if (width >= 576) {
	 document.write('<style>body {-moz-transform: scale(0.55, 0.55); zoom: 0.55; zoom: 55%;}</style>');
	}
	else if (width >= 476) {
	 document.write('<style>body {-moz-transform: scale(0.45, 0.45); zoom: 0.45; zoom: 45%;}</style>');
	}
	else if (width >= 376) {
	 document.write('<style>body {-moz-transform: scale(0.35, 0.35); zoom: 0.35; zoom: 35%;}</style>');
	}
	else if (width >= 260) {
	 document.write('<style>body {-moz-transform: scale(0.35, 0.35); zoom: 0.35; zoom: 29%;}</style>');
	}
	else if (width >= 276) {
	 document.write('<style>body {-moz-transform: scale(0.35, 0.35); zoom: 0.35; zoom: 25%;}</style>');
	}
	else {
	 document.write('<style>body {-moz-transform: scale(0.35, 0.35); zoom: 0.35; zoom: 25%;}</style>');
	}
	}
	fitZoom();