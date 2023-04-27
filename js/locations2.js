const LOCATIONS = [
  {
    id: 1,
    name: "São Paulo, Brasil",
    videoIds: [
      "39eKuBwiOv0",
      "Ic2ERD7kt4o",
      "WcjGyIjHLDA"
    ],
    radio: {
      url: "https://cloud2.cdnseguro.com:20000/stream/1/",
      name: "KISS FM"
    },
    startTime: 33
  },
  {
    id: 2,
    name: "Rio de Janeiro, Brasil",
    videoIds: [
      "fG_idt30MZA",
      "qMe8DaHBR8w",
      "n4S7HeK2CmI"
    ],
    radio: {
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_GLOBO_RJ_SC",
      name: "Rádio Globo 98.1 FM"
    },
    startTime: 33
  }
];

function chooseRandomLocation() {
  const availableLocations = LOCATIONS.filter(({ id }) =>
    state.currentLocation ? state.currentLocation.id !== id : true
  );

  return availableLocations[Math.floor(Math.random() * availableLocations.length)];
}

function changeLocation(locationId) {
  if (state.currentLocation && locationId == state.currentLocation.id) return;

  changeLoadingState(true);

  const location = LOCATIONS.find((location) => location.id == locationId);

  state.currentLocation = location;

  changeLocationText(location.name);
  const randomVideoId = location.videoIds[Math.floor(Math.random() * location.videoIds.length)];
  changeVideoSource(randomVideoId);
  changeRadio(location.radio);
  toggleActiveClassOnLocation(location.id);
  playVideo(location);
}
