import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DemoNav = () => {
	const tabs = [
		{ icon: '🍅', label: 'Tomato' },
		{ icon: '🥬', label: 'Lettuce' },
		{ icon: '🧀', label: 'Cheese' },
		{ icon: '🥕', label: 'Carrot' },
		{ icon: '🍌', label: 'Banana' },
		{ icon: '🫐', label: 'Blueberries' },
		{ icon: '🥂', label: 'Champers?' }
	];
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<div className="max-w-screen max-h-screen flex flex-col m-10">
			<main>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						key={selectedTab ? selectedTab.label : 'empty'}
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 20 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.15 }}
						className="h-24 w-24 border-2 m-2"
					>
						selected : {selectedTab ? selectedTab.icon : '😋'}
					</motion.div>
				</AnimatePresence>
			</main>
			<nav className="flex flex-row gap-5">
				{tabs.map((item) => (
					<li
						key={item.label}
						className={
							item === selectedTab
								? 'border-4 bg-red-400 p-2'
								: 'border-4 p-2 hover:bg-red-400'
						}
						onClick={() => setSelectedTab(item)}
					>
						{`${item.icon} ${item.label}`}
						{item === selectedTab ? (
							<motion.div
								className="bg-gray-500 h-1"
								layoutId="underline"
							/>
						) : null}
					</li>
				))}
			</nav>
		</div>
	);
};

export default DemoNav;
