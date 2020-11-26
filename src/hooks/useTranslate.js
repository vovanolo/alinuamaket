import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

export function useTranslate() {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  /**
   * Change i18m language and save it to localStorage.lang
   * @param {string} newLang
   */
  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
    history.push({
      ...location,
      pathname: `/${newLang}${location.pathname.slice(3)}`,
    });
  };

  const getLocalizedUrl = (url) => {
    return `/${localStorage.getItem('lang') || 'ua'}${url}`;
  };

  return {
    t,
    i18n,
    changeLanguage,
    getLocalizedUrl,
  };
}
