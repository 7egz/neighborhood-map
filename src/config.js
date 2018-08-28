export 	const points = [
  	{lat: 51.221720, lng: 6.776160,title:'Dusseldorf'},
    { lat: 50.933330, lng: 6.950000,title:'Koln' },
    { lat: 51.456570, lng: 7.012280,title:'Essen' },
    { lat: 51.432470, lng: 6.765160 ,title:'Duisburg'},
    { lat: 51.514940, lng: 7.466000,title:'Dortmund' }
];
export const getUrl=(lat,lng)=>`https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=ZEAJ5DWT3L3MZDYT4THT5H11X510SDVRNA2CZJYCCZWBUWBO&client_secret=4CPNIOO1LJCIS0H2RXVQOSBAVFQJOTDJ2MOXG43YKZDZG3LL&v=20120610`;
export default {points,getUrl}


