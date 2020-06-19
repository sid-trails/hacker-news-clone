import React from 'react';
import { render } from '@testing-library/react';
import NewsList from './NewsList';
import useNewsItems from '../CustomHooks/useNewsItems';

jest.mock('../CustomHooks/useNewsItems');



describe('NewsList', () => {
it('Should render list of News Items that are returned by Selectors', () => {
    const selector = useNewsItems.mockReturnValue([{
      id:1,
      title:'This is a test Title',
      upvotes:20
    },
    {
      id:2,
      title:'This is a test Title',
      upvotes:20
    }])
    const { queryAllByTestId } =  render(<NewsList dataSelector={selector} />);
    expect(queryAllByTestId(/NewsItem-*/).length).toBe(2);
  });
});