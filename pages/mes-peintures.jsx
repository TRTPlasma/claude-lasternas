'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback } from 'react';
import useData from '../components/hooks/useData';
import Heading from '../components/Heading';
import Grid from '../components/Grid';

export default function Index() {
  const { push } = useRouter();
  const data = useData();

  const callback = useCallback(_id =>
    push(`/mes-peintures/${_id}`)
  );

  return (
    <Fragment>
      <Heading>
        Voici mes peintures:
      </Heading>
      <Grid data={data} message='Voir plus' callback={callback} />
    </Fragment>
  );
}
