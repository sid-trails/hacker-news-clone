import React from 'React';
import { useSelector } from 'react-redux';
import useNewsItems from './useNewsItems';

jest.mock('react-redux', ()=> {
  return {useSelector: jest.fn() }
})
describe('useNewsItems', ()=> {

  it('should return news items from the store', () => {
      const testItem = {
        id:1,
        title: 'Test',
        upvotes:200 
      };
      useSelector.mockReturnValue([testItem]);
      expect(useNewsItems().length).toBe(1);
      expect(useNewsItems()[0]).toBe(testItem);
  }); 
});                                                                                                                                                                                                                                                                                                                                          