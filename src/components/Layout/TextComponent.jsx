import React from 'react';

const TextComponent = ({ content, className }) => {
  return (
    <div className={className}>
      {content}
    </div>
  );
};

export default TextComponent;
