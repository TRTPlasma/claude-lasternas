'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import useData from '../components/hooks/useData';
import Heading from '../components/Heading';
import Grid from '../components/Grid';

export default function Index() {
  const { push } = useRouter();
  const [data, setData] = useState([]); 
  let _data = useData();

  const callback = useCallback(_id =>
    push(`/mes-peintures/${_id}`)
  );

  useEffect(() => {  
    setData(_data.filter(({ main }) => main === 'Oui'));
  }, [_data]);

  return (
    <Fragment>
      <Heading>
        Voici un aperçu de mes peintures:
      </Heading>
      <Grid data={data} message='Voir plus' callback={callback} />
    </Fragment>
  );
}
