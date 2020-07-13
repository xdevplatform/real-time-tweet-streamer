import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Rule from "./Rule";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";

const reducer = (state, action) => {
  switch (action.type) {
    case "show_rules":
      return { ...state, rules: action.payload, newRule: "" };
    case "add_rule":
      return {
        ...state,
        rules: [...state.rules, ...action.payload],
        newRule: "",
        errors: [],
      };
    case "add_errors":
      return { ...state, rules: state.rules, errors: action.payload };
    case "delete_rule":
      return {
        ...state,
        rules: [...state.rules.filter((rule) => rule.id !== action.payload)],
      };
    case "rule_changed":
      return { ...state, newRule: action.payload };
    case "change_loading_status":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const RuleList = () => {
  const initialState = { rules: [], newRule: "", isLoading: false, errors: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const exampleRule = "from:twitterdev has:links";
  const ruleMeaning = `This example rule will match Tweets posted by 
     TwtterDev containing links`;
  const operatorsURL =
    "https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule";
  const rulesURL = "/api/rules";

  const createRule = async (e) => {
    e.preventDefault();
    const payload = { add: [{ value: state.newRule }] };

    dispatch({ type: "change_loading_status", payload: true });
    try {
      const response = await axios.post(rulesURL, payload);
      if (response.data.body.errors)
        dispatch({ type: "add_errors", payload: response.data.body.errors });
      else {
        dispatch({ type: "add_rule", payload: response.data.body.data });
      }
      dispatch({ type: "change_loading_status", payload: false });
    } catch (e) {
      dispatch({
        type: "add_errors",
        payload: [{ detail: e.message }],
      });
      dispatch({ type: "change_loading_status", payload: false });
    }
  };

  const deleteRule = async (id) => {
    const payload = { delete: { ids: [id] } };
    dispatch({ type: "change_loading_status", payload: true });
    await axios.post(rulesURL, payload);
    dispatch({ type: "delete_rule", payload: id });
    dispatch({ type: "change_loading_status", payload: false });
  };

  const errors = () => {
    const { errors } = state;

    if (errors && errors.length > 0) {
      return errors.map((error) => (
        <ErrorMessage key={error.title} error={error} styleType="negative" />
      ));
    }
  };

  const rules = () => {
    const { isLoading, rules } = state;

    const message = {
      title: "No rules present",
      details: [
        `Here are some example rules to help you get started`,
        `1) Discovering new music videos: Imagine a dashboard that lets you see the music videos being shared across Twitter`,
        "song youtube has:links context:55.810938279801470977",
        `2) Finding remote developer job openings: Imagine creating a remote developer job listings app with remote developer job openings being shared across Twitter`,
        "(developer OR engineer) remote (context:66.961961812492148736 OR context:66.850073441055133696)",
        `3) Learning about personal finance and savings: Surface public conversations about personal finance and savings happening on Twitter`,
        "context:66.847888632711061504 has:links -is:retweet savings",
      ],
      type: operatorsURL,
    };

    if (!isLoading) {
      if (rules && rules.length > 0) {
        return rules.map((rule) => (
          <Rule
            key={rule.id}
            data={rule}
            onRuleDelete={(id) => deleteRule(id)}
          />
        ));
      } else {
        return (
          <ErrorMessage
            key={message.title}
            error={message}
            styleType="warning"
          />
        );
      }
    } else {
      return <Spinner />;
    }
  };

  useEffect(() => {
    (async () => {
      dispatch({ type: "change_loading_status", payload: true });

      try {
        const response = await axios.get(rulesURL);
        const { data: payload = [] } = response.data.body;
        dispatch({
          type: "show_rules",
          payload,
        });
      } catch (e) {
        dispatch({ type: "add_errors", payload: [e.response.data] });
      }

      dispatch({ type: "change_loading_status", payload: false });
    })();
  }, []);

  return (
    <div>
      <form onSubmit={(e) => createRule(e)}>
        <div className="ui fluid action input">
          <input
            type="text"
            autoFocus={true}
            value={state.newRule}
            onChange={(e) =>
              dispatch({ type: "rule_changed", payload: e.target.value })
            }
          />
          <button type="submit" className="ui primary button">
            Add Rule
          </button>
        </div>
        {errors()}
        {rules()}
      </form>
    </div>
  );
};

export default RuleList;
