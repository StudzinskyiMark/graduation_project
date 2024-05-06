import { Button } from '../ui/button';
import { Mail } from 'lucide-react';

export function Login() {
	return (
		<>
			<Button className="mx-4">
				<Mail className="mr-2 h-4 w-4" /> Login with Email
			</Button>
		</>
	);
}
