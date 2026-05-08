import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Check against your .env password
                if (credentials?.password === process.env.ADMIN_PASSWORD) {
                    return { id: "1", name: "Admin" };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt",
    },
});

export { handler as GET, handler as POST };