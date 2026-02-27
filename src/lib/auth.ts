import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [GitHub],
  callbacks: {
    jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId
      }
      return token
    },
    session({ session, token }) {
      if (session) {
        session.user.id = String(token.id)
      }
      return session
    },
  },
})
