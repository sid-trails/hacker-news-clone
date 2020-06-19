import { useSelector } from 'react-redux';

function useNewsItem() {
	var items = useSelector((state) => state.newsItems);
	return items;
}

export default useNewsItem;
