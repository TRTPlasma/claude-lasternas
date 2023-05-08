'use strict';

import connect from '../../connect';
import model from '../../data.model';

export default async function Create(request, response) {
  if (request.method !== 'POST')
    return;

  const _id = Math.random().toString(36).slice(-8);
  const { main, file, price, description } = JSON.parse(request.body);

  console.log(main);

  try {
    await connect();

    const data = new model({ _id, main, file, price, description });
    await data.save();

    response.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
