import React from 'react';
import useNewsItems from '../CustomHooks/useNewsItems';
import NewsItem from '../NewsItem/NewsItem'

const NewsList = () => {
	const items = useNewsItems();
	return (
		<div data-testid="NewsList" className="container">
			{items.map((item) => <NewsItem key={item.id} data-testid={`NewsItem-${item.id}`} item={item} />)}
		</div>
	);
};

export default NewsList;
