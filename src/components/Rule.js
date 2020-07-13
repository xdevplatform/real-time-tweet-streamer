import React from "react";

export const Rule = ({ data, onRuleDelete }) => {
  return (
    <div className="ui segment">
      <p>{data.value}</p>
      <div className="ui label">tag: {data.tag}</div>
      <button
        className="ui right floated negative button"
        onClick={() => onRuleDelete(data.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Rule;
