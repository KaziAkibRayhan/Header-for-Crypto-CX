import './App.css';
import { RxBookmark, RxCross2 } from "react-icons/rx";
import { BsAlarm } from "react-icons/bs";
import { CgExport } from "react-icons/cg";
// import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
// import { MdTimeline } from "react-icons/md";
// import { MdOutlineCandlestickChart } from "react-icons/md";
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
            <button class="dropbtn">30min</button>
            <div class="dropdown-content">
              <a href="/">5m</a>
              <a href="/">1m</a>
              <a href="/">2w</a>
              <a href="/">7d</a>
              <a href="/">1d</a>
              <a href="/">12h</a>
              <a href="/">2h</a>
              <a href="/">1h</a>
              <a href="/">30min</a>
            </div>
          </div>
          <div className="menu-item item">
            <span>1m</span>
          </div>
          {/* <div className="menu-item item dropdown">
            <HiOutlineArrowTrendingUp />
            <div className="dropdown-item">
              <ul style={{ margin: 0, padding: '8px' }}>
                <li style={{ display: 'flex', gap: 5, alignItems: 'center' }}><MdOutlineCandlestickChart /><span>Candlestick</span></li>
                <li style={{ display: 'flex', gap: 5, alignItems: 'center' }}><HiOutlineArrowTrendingUp /><span>Line</span></li>
              </ul>
            </div>
          </div> */}
          {/* <div className="menu-item item dropdown">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <MdTimeline /> <span>Indicator</span>
              <div className="dropdown-item">
                <ul style={{ margin: 0, padding: '8px' }}>
                  <li><span>Exponential Moving Average (EMA)</span></li>
                  <li><span>Simple Moving Average (SMA)</span></li>
                  <li><span>Bollinger Bands (BBands)</span></li>
                  <li><span>Average True Range (ATR)</span></li>
                  <li><span>MACD</span></li>
                  <li><span>Stochastic Oscillator</span></li>
                  <li><span>Relative Strength Index (RSI)</span></li>
                  <li><span>Commodity Channel Index (CCI)</span></li>
                  <li><span>Rate of Change (ROC)</span></li>
                  <li><span>Average Directional Index (ADX)</span></li>
                </ul>
              </div>
            </div>
          </div> */}
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
