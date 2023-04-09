import './App.css';
import { RxBookmark, RxCross2 } from "react-icons/rx";
import { BsAlarm } from "react-icons/bs";
import { CgExport } from "react-icons/cg";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdTimeline } from "react-icons/md";
import { MdOutlineCandlestickChart } from "react-icons/md";
import './header';


function App() {
  return (
    <div>
      <div className="header">
        <div className="menu">
          <div className="menu-item">
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <RxBookmark className='separate-over-item' />
              <RxCross2 className='separate-over-item2' />
            </div>
          </div>
          <div className="menu-item item">

            <input type="text" className='inputSearch' id="itc_chart_input" />
            <div id="itc_chart_open_div"></div>

          </div>
          <div className="menu-item item dropdown">
            <span className="dropbtn">30min</span>
            <div className="dropdown-content">
              <li>5m</li>
              <li>1m</li>
              <li>2w</li>
              <li>7d</li>
              <li>1d</li>
              <li>12h</li>
              <li>2h</li>
              <li>1h</li>
              <li>30min</li>
            </div>
          </div>
          <div className="menu-item item">
            <span>1m</span>
          </div>
          <div className="menu-item item dropdown">
            <span className='dropbtn'><HiOutlineArrowTrendingUp /></span>
            <div className="dropdown-content">
              <li><MdOutlineCandlestickChart /><span style={{ marginLeft: '5px' }}>Candlestick</span></li>
              <li><HiOutlineArrowTrendingUp /><span style={{ marginLeft: '5px' }}>Line</span></li>
            </div>
          </div>
          <div className="menu-item item dropdown2">
            <div className='dropbtn2'>
              <MdTimeline /> <span className=''>Indicator</span>
            </div>
            <div className='dropdown-content2'>
              <section style={{ display: 'flex' }}>
                <div style={{ minWidth: 300 }}>
                  <div>
                    <li id='itc_chart_EMA' onClick={(e) => console.log(e.target.textContent)}><span>Exponential Moving Average (EMA)</span></li>
                    <li id='itc_chart_SMA' onClick={(e) => console.log(e.target.textContent)}><span>Simple Moving Average (SMA)</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Bollinger Bands (BBands)</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Average True Range (ATR)</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>MACD</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Stochastic Oscillator</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Relative Strength Index (RSI)</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Commodity Channel Index (CCI)</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Rate of Change (ROC)</span></li>
                    <li onClick={(e) => console.log(e.target.textContent)}><span>Average Directional Index (ADX)</span></li>
                  </div>
                </div>
                <div style={{ minWidth: 300 }}>
                  something coming
                </div>
              </section>
            </div>
          </div>
          <div className="menu-item item" >
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <CgExport /> <span>Export</span>
            </div>
          </div>
          <div className="menu-item item">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <BsAlarm /> <span>Alert</span>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-switch-wrapper">
        <em style={{ marginRight: '8px', fontWeight: 'bold' }}>Light</em>
        <label className="theme-switch" htmfor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <em style={{ fontWeight: 'bold' }}>Dark</em>
      </div>
    </div>
  );
}

export default App;
