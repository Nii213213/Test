import { memo } from "react";

const OperatorButton = memo(
  ({
    operator,
    onPressOperator,
  }: {
    operator: string;
    onPressOperator: (operator: string) => void;
  }) => {
    console.log("render!");
    return (
      <button
        className="btn btn-circle btn-outline"
        onClick={() => onPressOperator(operator)}
      >
        {operator}
      </button>
    );
  }
);

export default OperatorButton;
