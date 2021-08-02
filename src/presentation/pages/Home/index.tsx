import React, { useState, useEffect } from 'react';

import { getStores, Store } from 'services/store/getStore';
import ListStore from 'ui/ListStore';
import LoadingFeedback from 'ui/LoadingFeedback';

const pages: React.FC = () => {
  const [storeArray, setStoreArray] = useState<Array<Store>>([]);
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const fetchStores = async () => {
    const data = await getStores();
    const dataExists = data.length > 0;

    setStoreArray(data);
    setShowTable(dataExists);

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchStores();
  }, []);

  return (
    <>
      {showTable ? (
        <ListStore list={storeArray} />
      ) : (
        <LoadingFeedback
          loading={loading}
          message="Ainda não há lojas cadastradas"
        />
      )}{' '}
    </>
  );
};

export default pages;
