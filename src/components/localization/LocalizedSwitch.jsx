import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

const LocalizedSwitch = ({ children }) => {
  const { i18n } = useTranslation();

  const localizePath = (path) => {
    switch (typeof path) {
      case 'undefined':
        return undefined;
      case 'object':
        return path.map((key) => `/${i18n.language}${key}`);
      default:
        const isFallbackRoute = path === '*';
        return isFallbackRoute ? path : `/${i18n.language}${path}`;
    }
  };

  return (
    <Switch>
      {React.Children.map(children, (child) =>
        child.type === typeof Route
          ? React.cloneElement(child, {
              ...child.props,
              path: localizePath(child.props.path),
            })
          : child
      )}
    </Switch>
  );
};

export default LocalizedSwitch;
