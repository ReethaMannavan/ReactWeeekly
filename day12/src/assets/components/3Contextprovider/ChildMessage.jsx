import  { useContext } from 'react';
import MessageContext from './Message';

const ChildComponentMsg = () => {
  const message = useContext(MessageContext);

  return <p>Child received: {message}</p>;
};

export default ChildComponentMsg;