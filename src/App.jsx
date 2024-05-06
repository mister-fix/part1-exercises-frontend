import { useState } from "react";

const Button = ({ handler, text }) => {
	return <button onClick={handler}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
	return (
		<div>
			{text} {value}
		</div>
	);
};

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

			<StatisticsLine
				text="good"
				value={good}
			/>
			<StatisticsLine
				text="neutral"
				value={neutral}
			/>
			<StatisticsLine
				text="bad"
				value={bad}
			/>
			<StatisticsLine
				text="all"
				value={good + neutral + bad}
			/>
			<StatisticsLine
				text="average"
				value={`${(good - bad) / total || 0}`}
			/>
			<StatisticsLine
				text="positive"
				value={`${(good / total) * 100 || 0}%`}
			/>
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
				<Button
					handler={handleGood}
					text="good"
				/>
				<Button
					handler={handleNeutral}
					text="neutral"
				/>
				<Button
					handler={handleBad}
					text="bad"
				/>
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
