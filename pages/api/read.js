'use strict';

import connect from '../../connect';
import model from '../../data.model';

export default async function Read(request, response) {
  if (request.method !== 'GET')
    return;

  try {
    await connect();
    
    let data = await model.find({});

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}
