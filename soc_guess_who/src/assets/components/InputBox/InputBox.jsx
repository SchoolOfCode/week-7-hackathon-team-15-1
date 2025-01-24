export default function InputBox({ label, onInputChange, inputText }) {
  return (
    <div>
      <div>{label}</div>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        value={inputText}
      />
    </div>
  );
}
