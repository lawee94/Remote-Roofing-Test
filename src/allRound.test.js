import React from 'react';
import axios from 'axios';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./store/action/tiles";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './component/Header'
import Footer from './component/Footer'

configure({adapter: new Adapter()});

jest.mock('axios')

const mockStore = configureMockStore([thunk]); 

describe('actions creator', () => {

    // Testing getTiles action Creator
    it('Should create an action to get tiles', () => {
        const expAction = { type: 'GET' }
        expect(actions.getTiles()).toEqual(expAction)
    })

    // Testing setTiles action creator
    it('Should create an action to set tiles', () => {
        const tiles = [{ title: 'Billions', programType: 'series'}]
        const expAction = { type: 'SET', tiles }
        expect(actions.setTiles(tiles)).toEqual(expAction)
    })

    // Testing fetchTilesFailed action Creator
    it('Should create an action for failed fetch of tiles', () => {
        const expAction = { type: 'FAILED' }
        expect(actions.fetchTilesFailed()).toEqual(expAction)
    })
})

describe("initTiles() async action creator", () => {

    let store;
    beforeEach(() => { store = mockStore({ data: { } }) });

    //Tesing Async action creator for success
    it("dispatches initTiles action and returns data on success", async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { title: 'Billions'} })
        );
        await store.dispatch(actions.initTiles('series'))
        const action = store.getActions();
    
        expect.assertions(3);
        expect(action[0].type).toEqual("GET");  
        expect(action[1].type).toEqual("SET");
        expect(action[1].tiles.data.title).toEqual('Billions')
    });

    //Tesing Async action creator for error
    it("dispatches initTiles() action and returns an error", async () => {
        axios.get.mockImplementationOnce(() =>
          Promise.reject({ error: "Oops. Something went wrong... " })
        );
        
        try { 
            await store.dispatch(actions.initTiles());
        } catch {
          const action = store.getActions();
      
          expect.assertions(2);
          expect(action[0].type).toEqual("GET");
          expect(action[1].type).toEqual("FAILED");
        }
      });
});

//Header Component Testing
describe("Compenent Testing for Header" , () => {
    it("Header Compenent Testing for Links and Nav", () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('Link').length).toEqual(3)
        expect(wrapper.find('nav')).toHaveLength(1);
    })
})

//Footer Component Testing
describe("Compenent Testing for Footer" , () => {
    it("Footer Compenent Testing for Links ", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('Link').length).toEqual(6)
    })
})
