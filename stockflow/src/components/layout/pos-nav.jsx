import { useState, useEffect } from "react";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import search from "../../assets/icons/proicons--search.svg";
import addIcon from '../../assets/icons/add_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg';

export function PosNav() {
  const [offlineMode, setOfflineMode] = useState(false);
  const [buttonSwitch, setButtonSwitch] = useState("Online");

  dayjs.extend(LocalizedFormat);
  dayjs.extend(AdvancedFormat);

  const getDate = dayjs();
  const currentday = getDate.format("Do MMM");

  function Clock() {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(dayjs());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return <span>{time.format("LTS")}</span>;
  }

  function controlButtonSwitch() {
    if (buttonSwitch === "Online") {
      setButtonSwitch("Offline");
    } else {
      setButtonSwitch("Online");
    }
  }

  function renderoffline() {
    if (offlineMode === false) {
      setOfflineMode(true);
    } else {
      setOfflineMode(false);
    }
    controlButtonSwitch();
  }

  return (
    <>
      <div className="font-body z-50 bg-white flex align-middle m-auto fixed top-0 left-0 right-0 justify-between pl-23 pr-3 h-20 border-border border-b">
        <div className="flex flex-col align-middle justify-center">
          <p className="font-semibold m-0 p-0 text-md">Point of Sale</p>
          <p className="text-light m-0 p-0 text-sm">Table service & takeaway</p>
        </div>

        <div className="flex align-middle justify-between min-w-xl">
          <div className="bg-input border border-border rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md flex m-auto align-middle justify-center gap-2 p-0.5 px-2">
            <button className="mt-auto mb-auto pt-1">
              <img width={15} src={search} alt="search-icon" loading="lazy" />
            </button>
            <input
              className="m-auto outline-none align-middle placeholder:text-sm justify-center pl-1 text-md"
              placeholder="Search menu..."
            />
          </div>
          
          <div className="flex align-middle justify-center m-auto gap-2">
            <div className="bg-input text-light border flex m-auto align-middle justify-center p-0.5 px-2.5 border-border rounded-md font-money">
              {currentday}
            </div>
            <div className="bg-input font-money text-light border flex m-auto align-middle justify-center p-0.5 px-2.5 border-border rounded-md">
              {Clock()}
            </div>
          </div>

          <button className="bg-input scale-100 active:scale-110 flex m-auto px-1 p-0.5 rounded-sm border border-border cursor-pointer"><img src={addIcon} alt="addIcon" loading="lazy" /></button>

          {buttonSwitch === "Online" && (
            <button
              onClick={renderoffline}
              className="bg-lightgreen text-secondary active:translate-x-1 border flex m-auto align-middle justify-center px-2.5 p-0.5 border-secondary rounded-md cursor-pointer"
            >
              {buttonSwitch}
            </button>
          )}

          {buttonSwitch === "Offline" && (
            <button
              onClick={renderoffline}
              className="bg-lightred text-secondaryred border active:translate-x-1 flex m-auto align-middle justify-center px-2.5 p-0.5 border-secondaryred rounded-md cursor-pointer"
            >
              {buttonSwitch}
            </button>
          )}
        </div>
      </div>

      {offlineMode && (
        <div className="text-white fixed py-0.5 z-55  bg-offline top-0 left-0 right-0 flex align-middle justify-center">
          <div className="flex gap-2 text-sm">
            <span></span>
            <p>Offline Mode - Orders are queued for sync</p>
            <button className="bg-off px-2 border-none rounded-sm font-money">
              0 pending
            </button>
          </div>
        </div>
      )}
    </>
  );
}
