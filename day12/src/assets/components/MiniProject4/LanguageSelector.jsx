import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <label>Select Language: </label>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;