'use strict';

import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';
import { Fragment, useCallback, useEffect, useState } from 'react';
import useData from '../components/hooks/useData';
import Heading from '../components/Heading';
import Grid from '../components/Grid';
import Link from 'next/link';

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
      <Text fontSize={20} margin='20px'>
        Il y a la possibilité de réaliser des tableaux sur des thèmes personnalisés !
        Vous pouvez me <Link href='/contact'><strong>contacter</strong></Link>
      </Text>
    </Fragment>
  );
}
