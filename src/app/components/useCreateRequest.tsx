import { useState } from "react";

interface URLList {
  isError: boolean;
  value: string;
}

export function useCreateRequest() {
  const [urlList, setUrlList] = useState<URLList[]>([
    {
      isError: false,
      value: "",
    },
  ]);

  function addUrlToList() {
    urlList.push({
      isError: false,
      value: "",
    });
    setUrlList([...urlList]);
  }

  function removeUrlFromList(index: number) {
    urlList.splice(index, 1);
    setUrlList([...urlList]);
  }

  function processCreateRequest() {
    const processUrlList = urlList.map((url, index) => {
      return {
        url: `url-from-entry-${index + 1}`,
        value: url.value,
      };
    });

    alert(JSON.stringify(processUrlList, null, 4));
  }

  return {
    urlList,
    addUrlToList,
    removeUrlFromList,
    processCreateRequest,
  };
}
