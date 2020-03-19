import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useMousePosition from '../hooks/useMousePosition';

const DocumentTitle = () => {
  const { x, y } = useMousePosition();
  const title = `Mouse is at ${x}, ${y}`;
  useDocumentTitle(title);
  
  const style = {
    fontSize: `${y / 5}px`
  };

  return (<h1 style={ style }>Document Title</h1>);
};

export default DocumentTitle;
