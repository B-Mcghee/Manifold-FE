import store from '@/store'
import mockData from  '../mockData';
import {resetState} from './helpers'
import {types as mutations} from '@/store/meteorites/mutations'
describe('Mutations', () => {
    beforeEach(resetState);

    it('FETCH_METEORITES', () => {
store.commit(mutations.FETCH_METEORITES, mockData);
    });
})