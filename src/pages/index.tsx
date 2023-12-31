import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Todos from "~/Components/Todos";
import CreateTodos from "~/Components/CreateTodo";

export default function Home() {
  const {data: sessionData} = useSession()
  return (
    <>
      <Head>
        <title>Full stack tutorial</title>
        <meta name="description" content="To do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
         {sessionData && (
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
              <h3 className="text-xl font-bold">Todos</h3>
              <Todos />
              <CreateTodos />
            </div>
          </div>
         )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {/* {hello.data ? hello.data.greeting : "Loading tRPC query..."} */}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
        {/* {secretMessage && <span> - {secretMessage}</span>} */}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
