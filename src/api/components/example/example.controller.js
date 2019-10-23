import Example from './example.model';

const getAll = async (req, res) => {
  try {
    const example = await Example.find();

    return res.send(example);
  } catch (error) {
    return res.send(error);
  }
};

const getById = async ({ params: { id } }, res) => {
  try {
    const example = await Example.findById(id);

    return res.send(200, example);
  } catch (error) {
    return res.send(error);
  }
};

const save = async ({ body }, res) => {
  try {
    const example = await Example.create(body);

    return res.send(201, example);
  } catch (error) {
    return res.send(500, error);
  }
};

const update = async ({ body, params: { id } }, res) => {
  try {
    await Example.findOneAndUpdate({ _id: id }, body, { new: true });
    const updateExample = await Example.findOne({ _id: id });

    return res.send(200, updateExample);
  } catch (error) {
    return res.send(500, error);
  }
};

const del = async ({ params: { id } }, res) => {
  try {
    await Example.findOneAndDelete({ _id: id });

    return res.send(200);
  } catch (error) {
    return res.send(500, error);
  }
};

export { getAll, getById, save, update, del };
