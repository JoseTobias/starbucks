import React, { useState, useEffect } from 'react';

import { getStores, Store } from 'services/store/getStore';
import ListStore from 'ui/ListStore';
import LoadingFeedback from 'ui/LoadingFeedback';

const pages: React.FC = () => {
  const [storeArray, setStoreArray] = useState<Array<Store>>([]);
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const fetchStores = async () => {
    try {
      const data = await getStores();
      if (data.length === 0) {
        setShowTable(false);
      } else {
        setShowTable(true);
      }

      setStoreArray(data);

      setLoading(false);
    } catch (_) {
      setLoading(false);
    }
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
