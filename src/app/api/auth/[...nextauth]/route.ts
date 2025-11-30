import NextAuth from 'next-auth';
import { options } from './authOptions';

const AuthHandler = NextAuth(options);

export { AuthHandler as GET, AuthHandler as POST };

