import * as React from 'react';
import { useState } from 'react';

interface EmojiProps {
  columnNumber: string;
  rowNumber: string;
  length: number;
}

const Emoji = (props: EmojiProps) => {
  const [hover, setHover] = useState(false);

  const toggleHoverOn = (id: string) => {
    console.log(id);
    setHover(true);
  };

  const toggleHoverOff = (id: string) => {
    console.log(id);
    setHover(false);
  };

  const style = {
    flexGrow: 1,
    fontSize: `${100 / props.length}vw`,
    maxWidth: 'fit-content',
    maxHeight: `${100 / props.length}vw`,
    verticalAlign: 'top',
    lineHeight: 1,
    color: hover ? 'magenta' : 'white',
    backgroundColor: hover ? 'magenta' : 'white',
    transition: hover
      ? 'color 10ms ease-out, background-color 10ms ease-out'
      : 'color 1s ease-out, background-color 1s ease-out'
  };

  const text = hover ? '⬛' : '⬜️';

  return (
    <section
      id={`col-${props.columnNumber}-row-${props.rowNumber}`}
      key={`col-${props.columnNumber}-row-${props.rowNumber}`}
      onMouseEnter={() => toggleHoverOn(`col-${props.columnNumber}-row-${props.rowNumber}`)}
      onMouseLeave={() => toggleHoverOff(`col-${props.columnNumber}-row-${props.rowNumber}`)}
      style={style}>
      █
    </section>
  );
};

export default Emoji;
