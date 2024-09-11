'use client';

import { useEffect, useState } from 'react';

const StyledText: React.FC<{
  textItem: string;
  className?: string;
  blockClassName?: string;
}> = ({ textItem, blockClassName, className }) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(textItem);
  }, [textItem]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderStyledText = (text: string) => {
    // Split the text by period followed by space
    const sentences = text.split('. ');
    const middleIndex = Math.floor(sentences.length / 2);

    return (
      <div className={`max-w-[930px] ${blockClassName}`}>
        {sentences.map((sentence, index) => (
          <span
            key={sentence[0] + String(Date.now().toLocaleString())} // Use index for unique keys
            className={`${
              index < middleIndex ? 'text-black' : 'text-primary-gray'
            } ${className}`}
          >
            {sentence}
            {index < sentences.length - 1 ? '. ' : ''}
          </span>
        ))}
      </div>
    );
  };

  return <div>{renderStyledText(text)}</div>;
};

export default StyledText;
