import useGeolocation from "../Hooks/useGeolocation";

const UseGeolocation =()=>{
  const { latitude, longitude, error, loading } = useGeolocation();

  if (loading) return <p>Getting location...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <p>
      🌍 Your location: <br />
      Latitude: {latitude} <br />
      Longitude: {longitude}
    </p>
  );
}

export default UseGeolocation;