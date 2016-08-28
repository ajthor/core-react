'use strict';
//
// App Component
//
import React from 'react';

const AppContainer = ({children}) => (
  <app-container>
    {React.Children.map(children, child =>
        React.cloneElement(child, {})
      )}
  </app-container>
);

export default AppContainer;
