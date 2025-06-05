import useHover from "../Hooks/useHover";

const HoverComponent=()=> {
  const [isHovered, hoverRef] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        padding: '20px',
        backgroundColor: isHovered ? '#90cdf4' : '#edf2f7',
        textAlign: 'center',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease',
        width:'250px'
      }}
    >
      {isHovered ? 'Hovering!' : 'Hover over me'}
    </div>
  );
}

export default HoverComponent;

