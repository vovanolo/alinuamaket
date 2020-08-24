import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('ua');

  function changeLanguage(e) {
    const newLanguage = e.currentTarget.checked ? 'en' : 'ua';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <div>
      <h1>{t('Hello, World')}</h1>
      <input type="checkbox" onChange={changeLanguage} />
      <p>Current language is {language}</p>
    </div>
  );
}

export default App;
