// Este SVG tiene un diseño más adecuado para un "marco" o "esquina de grabado".
function CornerFrame({ className }) {
  return (
    <div className={`absolute w-24 h-24 text-comal/20 ${className}`}> {/* Aumentamos el tamaño a w-24 h-24 */}
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 99L1 1C1 0.447715 0.552285 0 0 0C-0.552285 0 -1 0.447715 -1 1L-1 99C-1 99.5523 -0.552285 100 0 100C0.552285 100 1 99.5523 1 99Z" stroke="currentColor"/>
        <path d="M99 1L1 1C0.447715 1 0 0.552285 0 0C0 -0.552285 0.447715 -1 1 -1L99 -1C99.5523 -1 100 -0.552285 100 0C100 0.552285 99.5523 1 99 1Z" stroke="currentColor"/>
        <path d="M8.5 28.5C11.3912 28.5 13.7388 26.1524 13.7388 23.2612C13.7388 20.3699 11.3912 18.0224 8.5 18.0224C5.60877 18.0224 3.26123 20.3699 3.26123 23.2612C3.26123 26.1524 5.60877 28.5 8.5 28.5Z" fill="currentColor"/>
        <path d="M25.5 16.5C28.3912 16.5 30.7388 14.1524 30.7388 11.2612C30.7388 8.3699 28.3912 6.02237 25.5 6.02237C22.6088 6.02237 20.2612 8.3699 20.2612 11.2612C20.2612 14.1524 22.6088 16.5 25.5 16.5Z" fill="currentColor"/>
        <path d="M12.5 45.5C15.3912 45.5 17.7388 43.1524 17.7388 40.2612C17.7388 37.3699 15.3912 35.0224 12.5 35.0224C9.60877 35.0224 7.26123 37.3699 7.26123 40.2612C7.26123 43.1524 9.60877 45.5 12.5 45.5Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

export default CornerFrame;