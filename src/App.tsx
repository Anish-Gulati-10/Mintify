import { ConnectButton } from 'thirdweb/react';
import thirdwebIcon from './thirdweb.svg';
import { client } from './client';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';

export function App() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex flex-col gap-4 justify-center mb-10">
          <ConnectButton client={client} />
          <div className="flex justify-between">
            <Link
              to="/mint"
              className="flex px-5 py-3 text-sm items-center gap-2 rounded-lg border-2 border-[#212226] text-white bg-[#131418] hover:bg-[#171822]"
            >
              Mint a NFT <TiArrowRightThick />
            </Link>
            <Link
              to="/collections"
              className="flex px-5 py-3 text-sm items-center gap-2 rounded-lg border-2 border-[#212226] text-white bg-[#131418] hover:bg-[#171822]"
            >
              Browse NFTs <TiArrowRightThick />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-14">
      <img
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: 'drop-shadow(0px 0px 24px #a726a9a8)',
        }}
      />

      <h1 className="text-2xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-100">
        Mintify
      </h1>

      <p className="text-zinc-300 text-base">
        Read the{' '}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{' '}
        file to get started.
      </p>
    </header>
  );
}
