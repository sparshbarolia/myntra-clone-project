import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import axios from 'axios';

const FetchItems = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    // fetch("http://localhost:8080/api/items", { signal })
    //   .then((res) => res.json())
    //   .then( (items) => {
    //     dispatch(fetchStatusActions.markFetchDone());
    //     dispatch(fetchStatusActions.markFetchingFinished());
    //     dispatch(itemsActions.addInitialItems(items.items[0]));
    //     // console.log(items);
    //     // console.log(items.items);
    //     // console.log(items.items[0]);
    //   });

    // axios.get("http://localhost:8080/api/items")
    // .then( (items) => {
    //     dispatch(fetchStatusActions.markFetchDone());
    //     dispatch(fetchStatusActions.markFetchingFinished());
    //     dispatch(itemsActions.addInitialItems(items.data.items[0]));
    //     // console.log(items);
    //     // console.log(items.data);
    //     // console.log(items.data.items[0]);
    // })

    axios.get(`${BASE_URL}/api/items`)
    .then( (items) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items.data.items[0]));
        // console.log(items);
        // console.log(items.data);
        // console.log(items.data.items[0]);
    })

    //ye fetch method ke sath chlegi
    // return () => {
    //   controller.abort();
    // };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
