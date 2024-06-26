export default ({ title, showText, textSize, textColor, subtitle }) => {
  return (
    <div
      className="textSide"
      style={{
        display: showText ? "block" : "none",
        fontSize: `1.5em`,
        color: `rgba(${textColor.r},${textColor.g},${textColor.b},${textColor.a})`,
      }}
    >
      <h3>Contato da Rádio Novo Tempo</h3>
      <p>Use a câmera do seu celular</p>
    </div>
  );
};
