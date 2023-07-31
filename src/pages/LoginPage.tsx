import React, { useState } from 'react';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		// setEmail(e.target.value);
	};
	return (
		<>
			<input type="text" />
			<input type="text" value={email} onChange={onChange} />
		</>
	);
}

export default LoginPage;
