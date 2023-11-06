import "./JoinUsButton.scss";

function JoinUsButton() {
  const buttonText = "Join Us!";

  return (
    <button className="button" role="button">
      <span class="text">{buttonText}</span>
    </button>
  );
}

export default JoinUsButton;
