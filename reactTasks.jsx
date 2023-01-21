function Timer({ delay }) {
	return <div>{delay}</div>;
}
export default function App2() {
	const [time, setTimer] = useState(0);
	const [delay, setDelay] = useState(1000);

	useEffect(() => {
		// const id = setInterval(() => {
		// 	setTimer((time) => time + 1)
		// }, delay)
		console.log('mount');

		return () => {
			console.log('unmount');
			// clearInterval(id);
		}
	}, [delay])

	return (
		<>
			<Timer delay={time} />
			<button onClick={() => setDelay(100)}>100ms</button>
			<button onClick={() => setTimer(500)}>500ms</button>
			<button onClick={() => setDelay(1000)}>1000ms</button>
		</>
	);
}





/***************************** */



// import "./styles.css";
// import React, { useState, useEffect, useCallback } from "react";

// const MyButton = React.memo(({ onClick, children }) => {
//   // useEffect(() => {
//   console.log("button render");
//   // });
//   return <button onClick={onClick}>{children}</button>;
// });

// export default function App() {
//   const [visible, setVisibility] = useState(false);

//   const handleClick = useCallback(() => {
//     setVisibility((currentValue) => !currentValue);
//   }, [setVisibility]);

//   return (
//     <div>
//       <MyButton onClick={handleClick}>Knopochka</MyButton>
//       {visible && <h1>SOME TEXT</h1>}
//     </div>
//   );
// }