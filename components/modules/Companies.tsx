import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

function Companies() {
  return (
    <div className="flex justify-between items-center">
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;