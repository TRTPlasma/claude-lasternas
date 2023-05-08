'use strict';

import connect from '../../connect';
import model from '../../data.model';

export default async function Delete(request, response) {
  if (request.method !== 'DELETE')
    return;
  
  const { _id } = request.query;


  try {
    await connect();

    await model.findOneAndDelete({ _id });

    response.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
