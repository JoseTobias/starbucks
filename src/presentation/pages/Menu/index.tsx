import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { ListMenuItens } from 'presentation/ListMenuItens';
import { useParams } from 'react-router-dom';
import { selectMenus, fetchMenu } from 'store/menu';
import LoadingFeedback from 'ui/LoadingFeedback';

const pages: React.FC = () => {
  const state = useAppSelector(selectMenus);
  const dispatch = useAppDispatch();
  const [showTable, setShowTable] = useState(false);

  const { storeId } = useParams<{ storeId: string }>();

  useEffect(() => {
    dispatch(fetchMenu(Number(storeId)));
  }, []);

  useEffect(() => {
    if (!state.loading) {
      const dataExists = state.menus.length > 0;
      setShowTable(dataExists);
    }
  }, [state.loading]);

  return (
    <>
      {showTable ? (
        <ListMenuItens
          list={state.menus[0].list}
          storeId={state.menus[0].storeId}
          storeName={state.menus[0].storeName}
        />
      ) : (
        <LoadingFeedback
          loading={state.loading}
          message="Não há itens no cardápio"
        />
      )}{' '}
    </>
  );
};

export default pages;
