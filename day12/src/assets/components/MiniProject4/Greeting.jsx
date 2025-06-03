import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const translations = {
  en: {
    greeting: 'Hello!',
  },
  fr: {
    greeting: 'Bonjour!',
  },
};

const Greeting = () => {
  const { language } = useContext(LanguageContext);
  const text = translations[language] || translations.en;

  return <h3>{text.greeting}</h3>;
};

export default Greeting;