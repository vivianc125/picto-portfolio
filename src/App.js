import React, {useState} from 'react';

function sendItem(){

}

function Screen() {


  return (
    <div className="screen">
      <div className="screen-container">
      <div className = "row">
          <div className="stack-left">
            <div className="test">THINGS</div>
          </div>
          <div className="stack">
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
          </div>
        </div>
        
      </div>

      <div className = "screen-container">
        <div className = "row">
          <div className="stack-left">
            <div className="scroll">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
            <div className="drawing-items">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
            <div className="size">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
            <div className="misc-keyboards">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
          
          </div>
          <div className="stack">
            <div className="sketch-screen">
                <div className="stack">
                <div className = "row">
                  <div className="screenname"> vivian </div>
                  <div className = "first-line"></div>
                </div>
                  <div className="screen-lines"></div>
                  <div className="screen-lines"></div>
                  <div className="screen-lines"></div>
                </div>
              </div>        
                <div className="keyboard">                            
                  <div className = "row">      
                    <div className="keyboard-left">helloo left</div>
                    <div className="keyboard-right">
                      <div>
                        <button className="sendItem"></button>
                        <button className="sendBack"></button>
                        <button className="eraseScreen"></button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
