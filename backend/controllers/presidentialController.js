import Presidential from '../models/PresidentialVote.js';

const createVote = async (req, res) => {
  try {
    let { file } = req.body;
    file = req.file.filename;
    console.log(file);
    const vote = await Presidential.create({
      magalada: req.body.magalada,
      goobtaCodka: req.body.goobtaCodka,
      kulmiye: req.body.kulmiye,
      waddani: req.body.waddani,
      ucid: req.body.ucid,
      Ansaxay: req.body.Ansaxay,
      aanAnSixin: req.body.aanAnSixin,
      imageUri: file,
      user: req.body.user,
    });

    if (!vote) {
      res.status(203).json({ message: 'Data has not created' });
    } else {
      return res
        .status(201)
        .json({ message: 'Data have been created', data: vote });
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

const getAllVotesWithUsers = async (req, res) => {
  try {
    const getAllVotes = await Presidential.find().populate('user');
    if (!getAllVotes) {
      return res.status(404).json({ message: 'Data not found' });
    }

    return res.status(200).json({ message: 'Data Found', data: getAllVotes });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

const deleteVote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedVote = await Presidential.findByIdAndDelete(id);

    if (!deletedVote) {
      return res.status(404).json({ message: 'No Vote to Delete' });
    }

    return res
      .status(200)
      .json({ message: 'Vote Deleted Successfully', data: deleteVote });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
const updateVote = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedVote = await Presidential.findByIdAndUpdate(id, req.body);

    if (!updatedVote) {
      return res.status(404).json({ message: 'No Vote to Delete' });
    }

    return res
      .status(200)
      .json({ message: 'Vote Deleted Successfully', data: updatedVote });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

const viewKulmiye = async (req, res) => {
  try {
    const kulmiye = await Presidential.find(
      {},
      { magalada: 1, goobtaCodka: 1, kulmiye: 1, user: 1 }
    ).populate('user');
    return res.status(200).json({ message: 'Data found', kulmiye });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
const viewWaddani = async (req, res) => {
  try {
    const waddani = await Presidential.find(
      {},
      { magalada: 1, goobtaCodka: 1, waddani: 1, user: 1 }
    ).populate('user');
    return res.status(200).json({ message: 'Data found', waddani });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
const viewUcid = async (req, res) => {
  try {
    const ucid = await Presidential.find(
      {},
      { magalada: 1, goobtaCodka: 1, ucid: 1, user: 1 }
    ).populate('user');
    return res.status(200).json({ message: 'Data found', ucid });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export {
  createVote,
  getAllVotesWithUsers,
  deleteVote,
  updateVote,
  viewKulmiye,
  viewWaddani,
  viewUcid,
};
