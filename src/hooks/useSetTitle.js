const { useEffect } = require("react");

const useSetTitle = (getTitle) => {
  useEffect(() => {
    document.title = `${getTitle} - Live News`;
  }, [getTitle]);
};

export default useSetTitle;
