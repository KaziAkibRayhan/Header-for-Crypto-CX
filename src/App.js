import './App.css';
import { RxBookmark, RxCross2 } from "react-icons/rx";
import { BsAlarm } from "react-icons/bs";
import { CgExport } from "react-icons/cg";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdTimeline } from "react-icons/md";
import { MdOutlineCandlestickChart } from "react-icons/md";


function App() {
  // const toggleMode = () => {
  //   document.body.classList.toggle('darkMode')
  // }

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
            <span>30min</span>
            <div className="dropdown-item">
              <ul>
                <li><span>5m</span></li>
                <li><span>1m</span></li>
                <li><span>2w</span></li>
                <li><span>7d</span></li>
                <li><span>1d</span></li>
                <li><span>12h</span></li>
                <li><span>2h</span></li>
                <li><span>1h</span></li>
                <li><span>30min</span></li>
              </ul>
            </div>

          </div>
          <div className="menu-item item">
            1m
          </div>
          <div className="menu-item item dropdown">
            <HiOutlineArrowTrendingUp />
            <div className="dropdown-item">
              <ul>
                <li style={{ display: 'flex', gap: 5, alignItems: 'center' }}><MdOutlineCandlestickChart /><span>Candlestick</span></li>
                <li style={{ display: 'flex', gap: 5, alignItems: 'center' }}><HiOutlineArrowTrendingUp /><span>Line</span></li>
              </ul>
            </div>
          </div>
          <div className="menu-item item dropdown">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <MdTimeline /> <span>Indicator</span>
              <div className="dropdown-item">
                <ul>
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
