import React, { useContext } from 'react';
import MyContext from './2SimpleReactParent';

const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return <h2>{contextValue}</h2>;
};

export default ChildComponent;