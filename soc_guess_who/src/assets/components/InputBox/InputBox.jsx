export default function InputBox({ label, onInputChange, defaultText }) {
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
        value={defaultText}
      />
    </div>
  );
} 
