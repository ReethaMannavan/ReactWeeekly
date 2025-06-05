import useMediaquery from "../Hooks/useMediaquery";

const MediaQuery =()=>{
  const isMobile = useMediaquery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? (
        <p>You're on a mobile device 📱</p>
      ) : (
        <p>You're on a desktop 🖥️</p>
      )}
    </div>
  );
}

export default MediaQuery;