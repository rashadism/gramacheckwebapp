import { useAuthContext } from "@asgardeo/auth-react";
import { useViewContext } from "../contexts/ViewContext";

const Home = () => {
	const {derivedAuthenticationState} = useViewContext();
	const { state} = useAuthContext();
	console.log(derivedAuthenticationState)
	console.log('-----------------')
	console.log(state)
	return (
		<div className="bg-neutral/[0.2] px-24 py-24 flex flex-grow flex-col justify-start gap-4 max-h-screen overflow-auto">
			<div className="flex flex-col gap-4">Welcome {derivedAuthenticationState?.authenticateResponse?.username}</div>
		</div>
	);
};
export default Home;
