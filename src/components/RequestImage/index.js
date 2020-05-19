import React from 'react'
import ScreenHeader from '../ScreenHeader';
import './RequestImage.css';
import ComboBox from '../DownShift';
import ComboBox2 from '../DownShift2';

const RequestImage = (props) => {

    const releases = props.releases.releases;
    const compatible_scram_archs = props.buildImage.compatible_scram_arch.scram_archs.map( c => {
        var info =  {
            scram_arch: c
        }
        return info;
    })

    return (
        
        <div className="Home">
            <div className="Background"></div>
                <div className="Home-text">
                    <ScreenHeader id="home-header" title="Request an image"/>
                </div>
                
                <div class="split left">
                    <div class="centered">
                        <div style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                            <p className="Page-text">1. Start by choosing a CMSSW release. You have chosen</p>
                            <p className={props.buildImage.image === "" ? "Chosen-text" : "UnChosen-text"}>{props.buildImage.image === "" ? "None" : props.buildImage.image}</p>
                            <p className="Page-text">2. Choose the SCRAM ARCH version. You have chosen</p>
                            <p className={props.buildImage.scram_arch === "" ? "Chosen-text" : "UnChosen-text"}>{props.buildImage.scram_arch === "" ? "None" : props.buildImage.scram_arch}</p>
                            <p><button class="button">Make a request</button></p>
                        </div>
                    </div>
                </div>
  

                <div class="split right">
                    <div class="centered">
                        <div style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                            <p><ComboBox books={releases} kind="release" text="CMSSW releases"/></p>
                            <p> <ComboBox2 books={compatible_scram_archs} kind="scram_arch" text="SCRAM ARCH versions"/></p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default RequestImage