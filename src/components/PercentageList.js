import React from "react";
import SpyNav from "./SpyNav";
import UsdNav from "./UsdNav";
import EuroNav from "./EuroNav";
import BtcNav from "./BtcNav";

const PercentageList = () => {
    return (
        <div className="list-group list-group-flush list-group-horizontal-lg offset-md-3">
          <SpyNav />
          <UsdNav />
          <EuroNav />
          <BtcNav />
        </div>
    )
}

export default PercentageList;