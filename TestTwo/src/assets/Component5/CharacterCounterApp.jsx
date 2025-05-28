import { useState } from "react";

const CharacterCounterApp = () => {

    const [text, setText] = useState("");
    const maxChars = 200;
    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const numberCount = (text.match(/\d/g) || []).length;
    const nearLimit = charCount > maxChars - 20 && charCount <= maxChars;


    const handleChange = (e) => {
        if (e.target.value.length <= maxChars) {
            setText(e.target.value)
        }
    };

    const resetText = () => setText("");

    return (
        <>
            <div className="app-container">
                <div className="counter-box">
                    <h1 className="title">Character Counter</h1>
                    <textarea className="text-input" rows="6" placeholder="Start Typing...." value={text} onChange={handleChange} />

                    <div className="info-box">
                        <div><strong>Words:</strong>{wordCount} </div>
                        <div><strong>Char:</strong>{charCount} / {maxChars}</div>
                        <div><strong>Spaces:</strong>{spaceCount} </div>
                        <div><strong>Numbers:</strong>{numberCount} </div>

                    </div>
                    {nearLimit && (
                        <div className="warning">
                            You've reached character limit!
                        </div>
                    )}
                    <div className="button-box">
                        <button onClick={resetText} className="reset-button">Reset</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CharacterCounterApp;