import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [total, setTotal] = useState(0);

	const average = (good - bad) / total || 0;
	const positive = (good / total) * 100 || 0;

	const handleGood = () => {
		setGood(good + 1);
		setTotal(total + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
		setTotal(total + 1);
	};

	const handleBad = () => {
		setBad(bad + 1);
		setTotal(total + 1);
	};

	return (
		<div>
			<h2>give feedback</h2>

			<div>
				<button onClick={handleGood}>good</button>
				<button onClick={handleNeutral}>neutral</button>
				<button onClick={handleBad}>bad</button>
			</div>

			<h2>statistics</h2>

			<div>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
				<p>all {total}</p>
				<p>average {average}</p>
				<p>positive {positive}%</p>
			</div>
		</div>
	);
};

export default App;
