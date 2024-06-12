import React from 'react';
import { useContract, useNFTs, ThirdwebNftMedia } from '@thirdweb-dev/react';

const Minter = () => {
  // const { contract } = useContract('<CONTRACT_ADDRESS>');
  // const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);

  // return (
  //   <div>
  //     <h2>My NFTs</h2>
  //     {isReadingNfts ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <div>
  //         {nfts.map((nft) => (
  //           <ThirdwebNftMedia
  //             key={nft.metadata.id}
  //             metadata={nft.metadata}
  //             height={200}
  //           />
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );
  return <h1>Minter</h1>;
};
export default Minter;
