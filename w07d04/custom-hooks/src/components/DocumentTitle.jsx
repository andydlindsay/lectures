import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useMousePosition from '../hooks/useMousePosition';

const DocumentTitle = () => {
  const { x, y } = useMousePosition();
  const title = `Mouse is at ${x}, ${y}`;
  useDocumentTitle(title);

  return (<h1>Document Title</h1>);
};

export default DocumentTitle;
