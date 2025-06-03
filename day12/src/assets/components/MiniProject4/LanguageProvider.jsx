import { useState } from 'react';
import LanguageContext from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';

const LanguageProvider = () => {
  const [language, setLanguage] = useState('en'); 

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      <h2>🈯 Language Context Example</h2>
      <LanguageSelector />
      <Greeting />
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;