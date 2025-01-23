export default function InputBox({ label }) {
  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="fname">{label}</label>
        <input type="text" id="fname" name="fname"></input>
      </form>
    </div>
  );
}
