import {ReactElement, useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import leaflet from 'leaflet';
import {MapType, URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const.ts';
import {Location} from '../../models/location.ts';


type OfferOnMap = {
  id: string;
  location: Location;
};

type OffersOnMap = OfferOnMap[];

type MapProps = {
  location: Location;
  offers: OffersOnMap;
  activeOfferId: string | null;
  type: MapType;
};


export default function Map({location, offers, activeOfferId, type}: MapProps): ReactElement {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 0],
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [13.5, 0],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (activeOfferId && offer.id === activeOfferId)
              ? activeCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOfferId]);

  return (
    <div
      className={type === MapType.Main ? 'cities__map map' : 'offer__map map' }
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
