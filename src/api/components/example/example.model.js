import { Schema, model } from 'mongoose';

const exampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model('Example', exampleSchema);
