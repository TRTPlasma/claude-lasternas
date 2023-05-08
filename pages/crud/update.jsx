'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback } from 'react';
import useData from '../../components/hooks/useData';
import Heading from '../../components/Heading';
import Grid from '../../components/Grid';

export default function Index() {
  const { push } = useRouter();
  const data = useData();

  const callback = useCallback(id =>
    push(`/crud/update/${id}`)
  );

  return (
    <Fragment>
      <Heading>
        Choisir la peinture à modifier:
      </Heading>
      <Grid data={data} message='Modifier' callback={callback} />
    </Fragment>
  );
}
