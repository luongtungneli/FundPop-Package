import React, {useEffect, useState} from 'react';
import AppBlocks from './AppBlocks.jsx';
import {getCampagin} from '../controller.js'

export function FundPop({product}) {
  const {
    id,
    variants: {nodes},
  } = product;
  const {price} = nodes[0];

  let productId = id.split('/');
  productId = productId[productId.length - 1];
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      setData("")
      await getCampagin(productId)
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log('Fail to get campaign: ', err));
    })();
  }, [product]);

  return data ? <AppBlocks data={data} price={price} /> : null;
}