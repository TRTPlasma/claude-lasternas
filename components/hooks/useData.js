'use strict';

import { useEffect, useState } from 'react';

export default function useData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data: _data } = await (await fetch('/api/read')).json();

    if (_data?.success === false)
      return;

    setData(_data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}
