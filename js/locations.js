LOCATIONS = [ // http://stream1.bestfmbudapest.hu/bestfm_nyiregyhaza.mp3
	{
		"id": 1,
		"name": "São Paulo, SP - Brasil",
		"videoId": "39eKuBwiOv0", 
		"radio": {
			"url": "https:\/\/cloud2.cdnseguro.com:20000\/stream\/1\/",
			"name": "KISS FM"
		},
		"startTime": 33
	},
	{
		"id": 2,
		"name": "Rio de Janeiro, RJ - Brasil",
		"videoId": "fG_idt30MZA",
		"radio": {
			"url": "https:\/\/playerservices.streamtheworld.com\/api\/livestream-redirect\/RADIO_GLOBO_RJ_SC",
			"name": "Rádio Globo 98.1 FM"
		},
		"startTime": 33
	},
	{
		"id": 3,
		"name": "Vitoria, ES - Brasil",
		"videoId": "MftsQqgFKNU",
		"radio": {
			"url": "https://audio8.cmaudioevideo.com/proxy/fmsuperc/stream",
			"name": "Rádio FM Super"
		},
		"startTime": 33
	}
]

function chooseRandomLocation() {
	const availableLocations = LOCATIONS.filter(({id}) => state.currentLocation ? state.currentLocation.id !== id : true);
	
	return availableLocations[Math.floor(Math.random() * availableLocations.length)];
}

function changeLocation(locationId) {
	if (state.currentLocation && locationId == state.currentLocation.id)
		return;

	changeLoadingState(true);

	const location = LOCATIONS.find(location => location.id == locationId);

	state.currentLocation = location;

	changeLocationText(location.name);
	changeVideoSource(location.videoId);
	changeRadio(location.radio);
	toggleActiveClassOnLocation(location.id);
	playVideo(location);
}


