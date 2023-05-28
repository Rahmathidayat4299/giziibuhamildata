import { makanan } from '../../server';

export default function handler(req, res) {
  res.status(200).json(makanan);
}
