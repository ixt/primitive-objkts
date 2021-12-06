import useConfig from '@app/features/useConfig';
import React from 'react';
import { AddressInputType } from './AddressTextInputs';

const FrameGenericNFT = ({
  image,
  name,
  description,
  user,
  advanceToNext
}: {
  image: string;
  name: string;
  description: string;
  user: AddressInputType;
  advanceToNext: () => void;
}) => {
  const { fill, metadata } = useConfig();
  return (
    <div className="nft">
        <video autoPlay loop className="media" src={image} poster={image}/>
      {metadata == 'show' && (
        <div className="meta">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="user">
            {user.type == 'collection' ? (
              <>
                In{' '}
                {user.name ||
                  `${user.address.slice(0, 6)}...${user.address.slice(-4)}`}
                's collection
              </>
            ) : (
              <>
                Created by{' '}
                {user.name ||
                  `${user.address.slice(0, 6)}...${user.address.slice(-4)}`}
              </>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .nft {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .media {
          width: 100%;
          height: 100%;
          object-fit: ${fill};
        }
        .meta {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px;
        }
        .name {
          font-weight: bold;
          font-size: 24px;
          margin-bottom: 5px;
          text-shadow: 0px 0px 4px rgba(0, 0, 0.1);
        }
        .description {
          opacity: 0.7;
          font-size: 18px;
          line-height: 1.5em;
          text-shadow: 0px 0px 4px rgba(0, 0, 0.1);
          margin-bottom: 5px;
        }
        .user {
          opacity: 0.7;
          font-size: 18px;
        }
        @media (max-width: 768px) {
          .meta {
            padding: 15px;
          }
          .name {
            font-size: 18px;
          }
          .desceription,
          .user {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default FrameGenericNFT;
