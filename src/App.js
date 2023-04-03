import './App.css';
import { RxBookmark, RxCross2 } from "react-icons/rx";
import { BsAlarm } from "react-icons/bs";
import { CgExport } from "react-icons/cg";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdTimeline } from "react-icons/md";
import List from './Components/List';


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
          <div className="menu-item">
            <input type="text" className='inputSearch' />
          </div>
          <div className="menu-item">

            <div class="showhim">HOVER ME
              <div class="showme">
                <ul>
                  <li>5m</li>
                  <li>1m</li>
                  <li>2w</li>
                  <li>7d</li>
                  <li>1d</li>
                  <li>12h</li>
                  <li>2h</li>
                  <li>1h</li>
                  <li>30min</li>
                </ul>
              </div>
            </div>

          </div>
          <div className="menu-item">
            1m
          </div>
          <div className="menu-item">
            <HiOutlineArrowTrendingUp />
          </div>
          <div className="menu-item">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <MdTimeline /> Indicator
            </div>
          </div>
          <div className="menu-item" >
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <CgExport /> Export
            </div>
          </div>
          <div className="menu-item">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <BsAlarm /> Alert
            </div>
          </div>
        </div>
        <List />
      </div>
    </div>
  );
}

export default App;
