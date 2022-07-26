import * as React from 'react';
import { useState } from 'react';
import Emoji from './Emoji';

const Canvas = () => {
  const [emojiSize, setEmojiSize] = useState(10);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const getContainerHeight = () => {
    return Math.floor(height / emojiSize);
  };

  const getContainerWidth = () => {
    return Math.floor(width / emojiSize);
  };

  const getRow = () => {
    let gridRow = {};
    for (let i = 0; i < getContainerWidth(); i++) {
      gridRow = {
        ...gridRow,
        [i]: {
          hover: false
        }
      };
    }
    return gridRow;
  };

  let gridColumn = {};
  for (let i = 1; i < getContainerHeight(); i++) {
    gridColumn = {
      ...gridColumn,
      [i]: getRow()
    };
  }

  const drawEmojiRow = (rowData: object, length: number, rowNumber: string): JSX.Element[] => {
    return Object.keys(rowData).map((columnNumber, i) => {
      return <Emoji key={i} columnNumber={columnNumber} rowNumber={rowNumber} length={length} />;
    });
  };

  const drawRow = (columnData: { [x: string]: object }) => {
    return Object.keys(columnData).map((rowNumber, i) => {
      const rowLength = Object.keys(columnData[rowNumber]).length;
      const emojiRow = drawEmojiRow(columnData[rowNumber], rowLength, rowNumber);
      return (
        <section
          key={i}
          style={{
            display: 'flex',
            width: '100%'
          }}>
          {emojiRow}
        </section>
      );
    });
  };

  return <section>{drawRow(gridColumn)}</section>;
};

export default Canvas;
