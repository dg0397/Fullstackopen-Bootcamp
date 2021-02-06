import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anecdote = ({ title, text, votes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    new Array(props.anecdotes.length + 1).join("0").split("").map(parseFloat)
  );

  const maxNumOfVotes = Math.max(...votes);

  const handleAnecdotes = () => {
    let randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };

  const handleVote = () => {
    const arry = [...votes];
    arry[selected]++;
    setVotes(arry);
  };

  return (
    <div>
      <Anecdote
        title="Anecdote Of The Day"
        text={props.anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button text="Vote" handleClick={handleVote} />
      <Button text="Next Anecdote" handleClick={handleAnecdotes} />
      {maxNumOfVotes > 0 && (
        <Anecdote
          title="Anecdote with most votes"
          text={props.anecdotes[votes.indexOf(maxNumOfVotes)]}
          votes={maxNumOfVotes}
        />
      )}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
