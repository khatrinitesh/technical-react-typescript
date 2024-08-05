import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode; // allows passing any content as children
}
const CustomApp: React.FC = () => {
  return (
    <>
    <Card>
        <h2>HEad title</h2>
        <p>Culpa irure sunt et nostrud incididunt ad do culpa nostrud sint velit velit in.</p>
    </Card>
    </>
  )
};

export default CustomApp;

const Card: React.FC = ({ title, children }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <div className="card-content">{children}</div>
      </div>
    </>
  );
};
