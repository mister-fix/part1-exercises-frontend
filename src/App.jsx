import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;

	return total === 0 ? (
		<div>
			<h2>statistics</h2>

			<p>No feedback given</p>
		</div>
	) : (
		<div>
			<h2>statistics</h2>

			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {good + neutral + bad}</p>
			<p>average {`${(good - bad) / total || 0}`}</p>
			<p>positive {`${(good / total) * 100 || 0}`}%</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => {
		setGood(good + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
	};

	const handleBad = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h2>give feedback</h2>

			<div>
				<button onClick={handleGood}>good</button>
				<button onClick={handleNeutral}>neutral</button>
				<button onClick={handleBad}>bad</button>
			</div>

			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
			/>
		</div>
	);
};

export default App;
