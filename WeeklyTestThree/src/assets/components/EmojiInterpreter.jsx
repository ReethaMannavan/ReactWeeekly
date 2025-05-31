import  { useState } from "react";


const emojiDictionary = {
  "😊": "Smiling Face",
  "😂": "Face with Tears of Joy",
  "❤️": "Red Heart",
  "👍": "Thumbs Up",
  "🎉": "Party Popper",
  "😢": "Crying Face",
  "🔥": "Fire",
  "🤔": "Thinking Face",
  "🙌": "Raising Hands"
};

const EmojiInterpreter=()=> {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleChange = (e) => {
    const emoji = e.target.value;
    setInput(emoji);

    if (emojiDictionary[emoji]) {
      setMeaning(emojiDictionary[emoji]);
    } else if (emoji.trim() === "") {
      setMeaning("");
    } else {
      setMeaning("Sorry, emoji not found!");
    }
  };

  const handleClick = (emoji) => {
    setInput(emoji);
    setMeaning(emojiDictionary[emoji]);
  };

  return (
    <div className="emoji-container">
      <h2>4.Emoji Interpreter</h2>
      <input
        placeholder="Enter an emoji here"
        value={input}
        onChange={handleChange}
        className="emoji-input"
      />
      <div className="meaning">{meaning}</div>

      <h3>Click an emoji to know its meaning:</h3>
      <div className="emoji-list">
        {Object.keys(emojiDictionary).map((emoji) => (
          <span
            key={emoji}
            className="emoji-item"
            onClick={() => handleClick(emoji)}
            role="button"
            tabIndex={0}
            aria-label={`Emoji ${emojiDictionary[emoji]}`}
            onKeyDown={(e) => e.key === "Enter" && handleClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EmojiInterpreter;