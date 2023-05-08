'use strict';

import mongoose from 'mongoose';

export default async function Connect() {
  if (mongoose.connections[0].readyState)
    return;

  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('[*] Connected with Mongoose');
  } catch (error) {
    console.log(error);
  }
}
