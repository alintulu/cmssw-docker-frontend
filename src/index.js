import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux'
import 'semantic-ui-css/semantic.min.css';

import releases from './data/releases.json';
import available from './data/available.json';
import building from './data/building.json';
import pending from './data/pending.json';

 /*
  json of compatible CMSSW releases and SCRAM ARCH versions
  {
    "release": "CMSSW_10_1_11",
    "scram_archs": [
      "slc6_amd64_gcc630",
      "slc7_amd64_gcc630",
      "slc7_amd64_gcc700"
    ]
  },
  {
    ...
  }
  What to show in the downshift forms for "Request an image"
 */

const initialReleases = {
  releases: releases
}

const ReleasesReducer = (state = initialReleases, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

/*
  json of images available in the gitlab registry, images currently being built 
  and pending request for building an image.
  {
        "name": "name1",
        "cmssw": "CMSSW_5_3_13_cand1",
        "scram_arch": "slc5_amd64_gcc462",
        "status": "done",
        "url": "gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_10_6_8_patch1-2020-02-19-df153472",
        "createdAt": "2020-09-09"
    },
    {
      ...
    }
    What to show in the table of "Available images"
*/

const initialTable = {
  available: available,
  building: building,
  pending: pending
}

const TableReducer = (state = initialTable, action) => {
  switch(action.type){
    default:
      return state;
  }
}

/*
  What to show in the table of "Availanle images" when you toggle the radio buttons
*/

const initialShow = {
  show: available
}

const ShowReducer = (state = initialShow, action) => {
  const new_show = action.show;
  switch(action.type){
    case 'SHOW':
      return {
        show: new_show
      }
    default:
      return state;
  }
}

/*
  What CMSSW release and SCRAM ARCH version is chosen on "Request and image".
  SCRAM ARCH is set to zero when new CMSSW release is chosen.
  Compatible scram archs are taken from releases.json when a CMSSW
  release is chosen 
*/

const initalBuildImageState = {
  image: "",
  scram_arch: "",
  compatible_scram_arch: {
    release: "",
    scram_archs: []
  }
};

const BuildImageReducer = (state = initalBuildImageState, action) => {
  const request_image = action.request_image;
  const request_scram_arch = action.request_scram_arch;
  const scram_arch_list = action.scram_arch_list;
  switch (action.type) {
    case 'REQUEST_IMAGE':
      return {
        ...state,
        image: request_image,
        scram_arch: ""
      }
    case 'REQUEST_SCRAM_ARCH':
      return {
        ...state,
        scram_arch: request_scram_arch
      }
    case 'CREATE_SCRAM_ARCH_LIST':
      return {
        ...state,
        compatible_scram_arch: scram_arch_list
      }
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    releases: ReleasesReducer,
    buildImage: BuildImageReducer,
    table: TableReducer,
    show: ShowReducer
  })
);

console.log("Reducer is", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
