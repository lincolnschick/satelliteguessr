import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../components/Map";

export default function Home() {
  const center = {lat: 38.9822, lng: -94.6708};
  const zoom = 10;
  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <Map center={center} zoom={zoom} />
    </Wrapper>
  )
}
