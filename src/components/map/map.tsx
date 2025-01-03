import {ReactElement, useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import leaflet from 'leaflet';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const.ts';
import {Offer} from '../../models/offer.ts';


type MapProps = {
  city: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  offers: Offer[];
  activeOfferId: string | null;
};


export default function Map({city, offers, activeOfferId}: MapProps): ReactElement {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

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
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
