export default function Button({ text, onClick, width }) {
  return (
    <button variant="contained" onClick={onClick} style={{ width: width }}>
      <span>{text}</span>
    </button>
  );
}
