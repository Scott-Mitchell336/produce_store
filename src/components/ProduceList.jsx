import produceData from "../produce_data";
import { useState } from "react";
import ProduceItem from "./ProduceItem";

function ProduceList() {
  return (
    <div>
      {produceData.map((item) => (
        <ProduceItem item={item} />
      ))}
    </div>
  );
}

export default ProduceList;
