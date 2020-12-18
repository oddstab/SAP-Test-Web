import React from "react";
import { Button } from "@material-ui/core";

const AnswerButton: React.FC<{
  highlight: boolean;
  str: string;
  num: number;
  onClick: (num: number) => void;
}> = ({ highlight, str, num, onClick }) => {
  const handleClick = () => {
    onClick(num);
  };

  return (
    <Button
      className="ans-button"
      variant="text"
      color="inherit"
      disableElevation
      fullWidth
      style={{
        textAlign: "left",
        marginBottom: "0.2rem",
        background: highlight ? "#689f38" : "",
      }}
      onClick={handleClick}
    >
      <div className="ans">
        {String.fromCharCode(num + 65)}.{" "}
        {str[str.length - 1] === "。" ? str.substring(0, str.length - 1) : str}
      </div>
    </Button>
  );
};

export default AnswerButton;
