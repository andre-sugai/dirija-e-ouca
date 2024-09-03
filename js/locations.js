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
			"url": "https:\/\/radio.saopaulo01.com.br\/8286\/stream\/1\/",
			"name": "Rádio Cidade FM(Itapemirim)"
		},
		"startTime": 33
	},
	{
		"id": 4,
		"name": "Curitiba, PR - Brasil",
		"videoId": "jE0twFwdNdQ",
		"radio": {
			"url": "https:\/\/s26.maxcast.com.br:8280\/live",
			"name": "Universitária FM (Maringa)"
		},
		"startTime": 33
	}
	
]
// LINK DE PLAYLIST	
// https://www.youtube.com/watch?v=DhKHAopx7D0&list=PLiTmeQEZDk9wFFVAgcEahDs0sNABYrgLW

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


