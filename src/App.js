import React, {useState, useEffect} from 'react';



function Screen() {
  const [activeScreen, setActiveScreen] = useState('default');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const historyContainer = document.querySelector('.top-stack');
    if (historyContainer) {
      historyContainer.scrollTop = historyContainer.scrollHeight;
    }
  }, [history]);

  function handleClick(type){
   let content;
   switch (type) {
    case 'about':
        content = 
        <div className="top-stack">
        <div className="screenname"> about </div>
          <p className="main-p">vivian chen</p>
          <p className="sub-p">senior at univ. of houston</p>
          <p className="sub-p">houston, tx</p>
        </div>;
        break;
    case 'education':
      content =         
      <div className="top-stack">
        <div className="screenname"> education </div>
          <p className="main-p">university of houston</p>
          <p className="sub-p">b.s. in computer science</p>
          <p className="sub-p">minor in mathematics</p>
          <p className="sub-p">may 2024</p>
        </div>;
      break;
      case 'projects':
        content =         
        <div className="top-stack">
          <div className="screenname"> projects </div>
            <p className="main-p">pebbles goes to penguin prison</p>
            <p className="main-p">tic-tac-toe</p>
          </div>;
        break;
      case 'experience':
        content =         
        <div className="top-stack">
          <div className="screenname"> experience </div>
            <p className="main-p">web developer @ uh sugarland</p>
          </div>;
        break;
      
    default:
      content = <div>hi</div>; 
  }
    setHistory(prevHistory => [...prevHistory, content]);
  }

  function renderHistory() {
    return history.map((item, index) => <div className = "screen-base" key={index}>{item}</div>);
  }
  return (
    <div className="screen">
      <div className="screen-container">
      <div className = "row">
          <div className="stack-left">
            <div className="test">hello</div>
          </div>
          <div className="top-stack" >
            {renderHistory()}
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
                  <div className="screen-lines"> 
                    <button className="info-button" onClick={() => handleClick('about')}>about me</button> 
                    <button className="info-button" onClick={() => handleClick('projects')}>projects</button>
                  </div>
                  <div className="screen-lines">
                    <button className="info-button" onClick={() => handleClick('education')}>education</button>
                    <button className="info-button" onClick={() => handleClick('resume')}>resume</button>
                    </div>
                  <div className="screen-lines">
                    <button className="info-button" onClick={() => handleClick('experience')}>experience</button>
                    </div>
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
