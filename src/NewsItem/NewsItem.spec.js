import React from 'react';
import { render } from '@testing-library/react';
import NewsItem from './NewsItem';
import useLocalStorage from '../CustomHooks/useLocalStorage';

jest.mock('./CustomHooks/useLocalStorage',() => {
	return jest.fn();
} )

describe('News Item', () => {
	it('should display Title', () => {
		const item = {
			created_at: '2020-05-28T13:42:07.000Z',
			title: 'AudioMass – free, open source, web-based Audio and Waveform editor',
			url: 'https://audiomass.co/',
			author: 'zaiste',
			points: 895,
			story_text: null,
			comment_text: null,
			num_comments: 162,
			story_id: null,
			story_title: null,
			story_url: null,
			parent_id: null,
			created_at_i: 1590673327,
			_tags: [ 'story', 'author_zaiste', 'story_23337091', 'front_page' ],
			objectID: '23337091',
			_highlightResult: {
				title: {
					value: 'AudioMass – free, open source, web-based Audio and Waveform editor',
					matchLevel: 'none',
					matchedWords: []
				},
				url: { value: 'https://audiomass.co/', matchLevel: 'none', matchedWords: [] },
				author: { value: 'zaiste', matchLevel: 'none', matchedWords: [] }
			}
		};
		const { getByText } = render(<NewsItem item={item} />);
		expect(getByText('AudioMass – free, open source, web-based Audio and Waveform editor')).toBeInTheDocument();
  });
  it('should render author name', () => {
    const item = {
			created_at: '2020-05-28T13:42:07.000Z',
			title: 'AudioMass – free, open source, web-based Audio and Waveform editor',
			url: 'https://audiomass.co/',
			author: 'zaiste',
			points: 895,
			story_text: null,
			comment_text: null,
			num_comments: 162,
			story_id: null,
			story_title: null,
			story_url: null,
			parent_id: null,
			created_at_i: 1590673327,
			_tags: [ 'story', 'author_zaiste', 'story_23337091', 'front_page' ],
			objectID: '23337091',
			_highlightResult: {
				title: {
					value: 'AudioMass – free, open source, web-based Audio and Waveform editor',
					matchLevel: 'none',
					matchedWords: []
				},
				url: { value: 'https://audiomass.co/', matchLevel: 'none', matchedWords: [] },
				author: { value: 'zaiste', matchLevel: 'none', matchedWords: [] }
			}
		};
    const { getByText } = render(<NewsItem item={item} />);
    expect(getByText('By: zaiste')).toBeInTheDocument();
  });
	it('Should display Up Votes',()=> {
		const item = {
			created_at: '2020-05-28T13:42:07.000Z',
			title: 'AudioMass – free, open source, web-based Audio and Waveform editor',
			url: 'https://audiomass.co/',
			author: 'zaiste',
			points: 895,
			story_text: null,
			comment_text: null,
			num_comments: 162,
			story_id: null,
			story_title: null,
			story_url: null,
			parent_id: null,
			created_at_i: 1590673327,
			_tags: [ 'story', 'author_zaiste', 'story_23337091', 'front_page' ],
			objectID: '23337091',
			_highlightResult: {
				title: {
					value: 'AudioMass – free, open source, web-based Audio and Waveform editor',
					matchLevel: 'none',
					matchedWords: []
				},
				url: { value: 'https://audiomass.co/', matchLevel: 'none', matchedWords: [] },
				author: { value: 'zaiste', matchLevel: 'none', matchedWords: [] }
			}
		};
		const { getByText,getByTestId } = render(<NewsItem item={item} />);
		expect(getByText('895')).toBeInTheDocument();
		expect(getByTestId('outline-upvote-icon')).toBeInTheDocument();
	});
	it('Should display Up Votes with Icon Solid when upvoted locally',()=> {
		const item = {
			created_at: '2020-05-28T13:42:07.000Z',
			title: 'AudioMass – free, open source, web-based Audio and Waveform editor',
			url: 'https://audiomass.co/',
			author: 'zaiste',
			points: 895,
			story_text: null,
			comment_text: null,
			num_comments: 162,
			story_id: null,
			story_title: null,
			story_url: null,
			parent_id: null,
			created_at_i: 1590673327,
			_tags: [ 'story', 'author_zaiste', 'story_23337091', 'front_page' ],
			objectID: '23337091',
			_highlightResult: {
				title: {
					value: 'AudioMass – free, open source, web-based Audio and Waveform editor',
					matchLevel: 'none',
					matchedWords: []
				},
				url: { value: 'https://audiomass.co/', matchLevel: 'none', matchedWords: [] },
				author: { value: 'zaiste', matchLevel: 'none', matchedWords: [] }
			}
		};
		const { getByText,getByTestId } = render(<NewsItem item={item} />);
		expect(getByText('895')).toBeInTheDocument();
		expect(getByTestId('outline-upvote-icon')).toBeInTheDocument();
  });
});
