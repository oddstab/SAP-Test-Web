import { Button, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";

interface IQuestionCard {
  id: number;
  question: string;
  select: string[];
  ans: string;
}

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
        {String.fromCharCode(num + 65)}. {str}
      </div>
    </Button>
  );
};

const QuestionCard: React.FC<IQuestionCard> = ({
  id,
  question,
  select,
  ans,
}) => {
  const [color, setColor] = useState(-1);

  return (
    <>
      <Card variant="outlined" style={{ marginBottom: "0.8rem" }}>
        <CardContent>
          {/* <h6 className="title fz-16"></h6> */}
          <p className="question fz-16">{question}</p>
          {select.map((str, i) => {
            return (
              <AnswerButton
                key={str}
                str={str}
                num={i}
                highlight={i === color}
                onClick={(e) => setColor(e)}
              />
            );
          })}
        </CardContent>
      </Card>
      <style jsx>
        {`
          .card {
            margin-bottom: 0.5rem;
          }

          .fz-16 {
            font-size: 16px;
          }

          .ans-button {
            text-align: left;
            margin-bottom: 3px;
          }

          .question {
            margin-top: 10px;
          }

          .question::before {
            content: "${id}. ";
            font-size: 18px;
            font-weight: bold;
          }

          .title {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default QuestionCard;
