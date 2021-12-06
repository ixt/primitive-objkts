import { AddressInputType } from '@app/components/AddressTextInputs';
import { useRouter } from 'next/dist/client/router';
import { validateETH, validateTZ } from './validators';


const { NEXT_PUBLIC_IPFS_NODE } = process.env;

type Config = {
  addresses: AddressInputType[];
  mode: 'ordered' | 'random';
  time: number;
  unit: 's' | 'm' | 'h';
  fill: 'contain' | 'cover';
  metadata: 'show' | 'hide';
  ipfsNode: string;
};

const useConfig = (): Config => {
  const { query } = useRouter();
  if (!query?.c)
    return {
      addresses: [],
      time: 0,
      mode: 'ordered',
      unit: 'm',
      fill: 'contain',
      metadata: 'show',
      ipfsNode: NEXT_PUBLIC_IPFS_NODE || 'https://cloudflare-ipfs.com/ipfs/'
    };
  const config: Config = JSON.parse(query.c as string);
  let { addresses, mode, time, unit, fill, metadata, ipfsNode } = config;
  addresses = addresses.filter(
    a => validateETH(a.address) || validateTZ(a.address)
  );

  return { addresses, mode, time, unit, fill, metadata, ipfsNode };
};

export default useConfig;
