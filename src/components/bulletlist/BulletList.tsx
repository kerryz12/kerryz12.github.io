import React from "react";
import "./BulletList.css";

interface BulletListProps {
  points: string[];
}

const BulletList: React.FC<BulletListProps> = ({ points }) => {
  return (
    <ul className="bullet-list">
      {points.map((point, index) => (
        <li key={index} className="bullet-list-item">
          {point}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
