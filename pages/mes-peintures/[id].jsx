'use strict';

import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Box, Heading, HStack, Text, Stack } from '@chakra-ui/react';
import useData from '../../components/hooks/useData';

export default function Id() {
  const { query } = useRouter();
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  let data = useData();

  useEffect(() => {
    data = data.filter(({ _id }) => _id === query.id);
    setFile(data[0]?.file);
    setPrice(data[0]?.price);
    setDescription(data[0]?.description);
  }, [data]);

  return (
    <Fragment>
      <HStack>
      <Box w='50vw' padding='20px'>
        <img src={file} alt='Affichage impossible' width='100%' />
      </Box>
        <Stack>
          <Heading size='md'>
            Description:
          </Heading>
          <Text>
            {description === ''
              ? 'Aucune description'
              : description
            }
          </Text>
          <Heading size='md'>
            Prix:
          </Heading>
          <Text color='blue.500' fontSize='xl'>
            {price === ''
              ? 'Prix inconnu'
              : `${price}€`
            }
          </Text>
        </Stack>
      </HStack>
    </Fragment>
  );
}
