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
      <div className="itc_chart_header">
        <div className="itc_chart_menu">
          <div className="itc_chart_menu_item">
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <RxBookmark className='itc_chart_separate_over_item' />
              <RxCross2 className='itc_chart_separate_over_item2' />
            </div>
          </div>
          <div className="itc_chart_menu_item itc_chart_hover_item">

            <input type="text" className='inputSearch' id="itc_chart_input" />
            <div id="itc_chart_open_div"></div>

          </div>
          <div className="itc_chart_menu_item itc_chart_hover_item itc_chart_dropdown">
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
          <div className="itc_chart_menu_item itc_chart_hover_item">
            <span>1m</span>
          </div>
          <div className="itc_chart_menu_item itc_chart_hover_item itc_chart_dropdown">
            <span className='dropbtn'><HiOutlineArrowTrendingUp /></span>
            <div className="dropdown-content">
              <li><MdOutlineCandlestickChart /><span style={{ marginLeft: '5px' }}>Candlestick</span></li>
              <li><HiOutlineArrowTrendingUp /><span style={{ marginLeft: '5px' }}>Line</span></li>
            </div>
          </div>
          <div className="itc_chart_menu_item itc_chart_hover_item itc_chart_dropdown2">
            <div className='dropbtn2'>
              <MdTimeline /> <span className=''>Indicator</span>
            </div>
            <div className='dropdown-content2'>
              <section style={{ display: 'flex' }}>
                <div style={{ minWidth: 300 }}>
                  <div>
                    <li data-key="EMA" className='itc_chart_item'><span>Exponential Moving Average (EMA)</span></li>
                    <li data-key="SMA" className='itc_chart_item'><span>Simple Moving Average (SMA)</span></li>
                    <li data-key='BBands' className='itc_chart_item'><span>Bollinger Bands (BBands)</span></li>
                    <li data-key='ATR' className='itc_chart_item'><span>Average True Range (ATR)</span></li>
                    <li data-key='MACD' className='itc_chart_item'><span>MACD</span></li>
                    <li data-key='SO' className='itc_chart_item'><span>Stochastic Oscillator</span></li>
                    <li data-key='RSI' className='itc_chart_item'><span>Relative Strength Index (RSI)</span></li>
                    <li data-key='CCI' className='itc_chart_item'><span>Commodity Channel Index (CCI)</span></li>
                    <li data-key='ROC' className='itc_chart_item'><span>Rate of Change (ROC)</span></li>
                    <li data-key='ADX' className='itc_chart_item'><span>Average Directional Index (ADX)</span></li>
                  </div>
                </div>
                <div id='itc_chart_container' style={{ minWidth: 300 }}>
                  {/* some items input here! */}
                </div>
              </section>
            </div>
          </div>
          <div className="itc_chart_menu_item item" >
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <CgExport /> <span>Export</span>
            </div>
          </div>
          <div className="itc_chart_menu_item item">
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
