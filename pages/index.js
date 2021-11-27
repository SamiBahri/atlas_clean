import Head from 'next/head';
import DemoNav from '../components/DemoNav';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 border-2 bg-gray-300">
			<Head>
				<title>DemoNav with Motion</title>
			</Head>

			<DemoNav />
		</div>
	);
}
