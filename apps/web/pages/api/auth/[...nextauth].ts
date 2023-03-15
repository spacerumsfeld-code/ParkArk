import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { generateAuthOptions } from '../../../server/auth';

const nextAuthHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, generateAuthOptions(req));

export default nextAuthHandler;
