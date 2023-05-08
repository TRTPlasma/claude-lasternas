'use strict';

import connect from '../../connect';
import model from '../../data.model';

export default async function Update(request, response) {
  if (request.method !== 'POST')
    return;

  const { _id, main, price, description } = JSON.parse(request.body);

  try {
    await connect();

    await model.findOneAndUpdate({ _id }, { main, price, description }, { upsert: true });

    response.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
