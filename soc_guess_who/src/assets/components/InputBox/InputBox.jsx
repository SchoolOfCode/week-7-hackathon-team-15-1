export default function InputBox({ label ,onInputChange}) {
  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="fname">{label}</label>
        <input type="text" id="fname" name="fname" onChange={(event)=>{onInputChange(event.target.value)}}></input>
      </form>
    </div>
  );
}
