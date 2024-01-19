import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    //if itemIndex >= 0 , return true
    //qki indexOf return val >= 0 if item is present in array 
    //mtlb is item ko finalItems array me rkho
    return itemIndex >= 0;  
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;