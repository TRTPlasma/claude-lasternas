'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback } from 'react';
import useData from '../../components/hooks/useData';
import Heading from '../../components/Heading';
import Grid from '../../components/Grid';

export default function Index() {
  const { query } = useRouter();
  const data = useData();

  const callback = useCallback(async id => {
    const _data = await (await fetch(`/api/delete?_id=${id}`, { method: 'DELETE' })).json();
    
    if (_data.success) {
      alert('la suppression a réussie');
    } else {
      alert('La suppression a échouée');
    }
  });

  return (
    <Fragment>
      <Heading>
        Choisir la peinture à supprimer:
      </Heading>
      <Grid data={data} message='Supprimer' callback={callback} />
    </Fragment>
  );
}
