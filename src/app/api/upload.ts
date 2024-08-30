import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry, something went wrong! ${error.message}` });
  },
  onNoMatch(req, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
