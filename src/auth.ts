import NextAuth, { type DefaultSession } from 'next-auth'
import { Provider } from 'next-auth/providers'
import Google from 'next-auth/providers/google'

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
})
