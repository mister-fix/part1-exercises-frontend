const Header = (props) => {
	const course = props.course;

	return <h2>{course}</h2>;
};

const Part = (props) => {
	const { name, exercises } = props.part;

	return (
		<p>
			{name} {exercises}
		</p>
	);
};

const Content = (props) => {
	const { parts } = props;

	return (
		<div>
			{parts.map((part) => (
				<Part
					key={part.name}
					part={part}
				/>
			))}
		</div>
	);
};

const Total = (props) => {
	const { parts } = props;

	return (
		<p>
			Number of exercises{" "}
			{parts[0].exercises + parts[1].exercises + parts[2].exercises}
		</p>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />

			<Content parts={course.parts} />

			<Total parts={course.parts} />
		</div>
	);
};

export default App;
