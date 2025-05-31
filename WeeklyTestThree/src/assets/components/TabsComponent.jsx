
import React, { useState, useEffect } from "react";


const Tabs=()=> {
  const [activetab, setActivetab] = useState(0);
  const [tabrefs, setTabrefs] = useState([]);

  const tabs = [
    { label: "Home", content: "🏠 Welcome to the Home tab!" },
    { label: "Profile", content: "👤 This is your Profile tab." },
    { label: "Settings", content: "⚙️ Adjust your settings here." }
  ];

  useEffect(() => {
    setTabrefs((prevRefs) =>
      Array(tabs.length)
        .fill()
        .map((_, i) => prevRefs[i] || React.createRef())
    );
  }, [tabs.length]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const nextIndex = e.shiftKey
        ? (index - 1 + tabs.length) % tabs.length
        : (index + 1) % tabs.length;
      tabrefs[nextIndex].current.focus();
    }
  };

  return (
    <div className="tab-container">
        <h1 className="tabcomponent">2.Tabs Component</h1>
      <div role="tablist" className="tab-list" aria-label="Trapped Tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={tabrefs[index]}
            role="tab"
            tabIndex="0"
            aria-selected={activetab === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            onFocus={() => setActivetab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tab-button ${activetab === index ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`tabpanel-${activetab}`}
        aria-labelledby={`tab-${activetab}`}
        className="tab-panel"
      >
        {tabs[activetab].content}
      </div>
    </div>
  );
}
export default Tabs;