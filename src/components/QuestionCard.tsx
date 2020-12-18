import { Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import AnswerButton from "./AnswerButton";

interface IQuestionCard {
  id: number;
  question: string;
  select: string[];
  ans: string;
}

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
