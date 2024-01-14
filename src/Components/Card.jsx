import React from "react";

const Card = ({ children, gridSpec }) => {
  const { rowStart, rowSpan, colStart, colSpan } = gridSpec;

  const cardStyle = `
    h-[280px]
    row-start-${rowStart}
    col-start-${colStart}
    row-span-${rowSpan || 1}
    col-span-${colSpan || 1}
    rounded-3xl
  `;

  return <div className={cardStyle}>{children}</div>;
};

export default Card;
