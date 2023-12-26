"use client";
import { useState } from "react";

export const initialPositions: PositionType[] = [
  { label: "一般看護師", value: "一般看護師", isSelected: false },
  { label: "主任", value: "主任", isSelected: false },
  { label: "園長", value: "園長", isSelected: false },
  { label: "パート", value: "パート", isSelected: false },
  { label: "看護師", value: "看護師", isSelected: false },
];

type PositionType = {
  label: string;
  value: string;
  isSelected: boolean;
};

export const Sidebar = () => {
  console.log("sample");
  const [positions, setPositions] = useState(initialPositions);

  const handlePosition = (target: number) => {
    setPositions((prevState) => {
      const newPositions = [...prevState];
      newPositions.forEach((position, index) => {
        if (index === target) {
          console.log(true);
          position.isSelected = !position.isSelected;
        }
      });

      return newPositions;
    });
  };

  return (
    <div>
      {positions.map((position, index) => (
        <div key={position.label} onClick={() => handlePosition(index)}>
          <input type="checkbox" checked={position.isSelected} readOnly />
        </div>
      ))}
    </div>
  );
};
