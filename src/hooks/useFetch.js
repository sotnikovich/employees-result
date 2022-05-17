import camelcase from "camelcase";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { apiActions } from "../modules/api/actions";
import { selectApiState } from "../modules/api/selectors";

const useFetch = (endpoint) => {
  const dispatch = useDispatch();
  const apiState = useSelector(selectApiState, shallowEqual);

  const performFetch = useCallback(
    (data) => dispatch(apiActions.fetch(endpoint, data)),
    [endpoint, dispatch]
  );
  const response = useMemo(
    () => apiState[camelcase(endpoint)],
    [apiState, endpoint]
  );

  return { response, performFetch };
};

export default useFetch;
