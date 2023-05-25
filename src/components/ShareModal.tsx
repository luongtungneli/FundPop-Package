import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./ShareModal.css"

function ShareModal(props: {visible: boolean, closeModal: () => void, name: string}) {
  const {visible, closeModal, name} = props
  const [copyText, setCopyText] = useState('Copy');
  const productLink = window.location.href;
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      id="fp-modal"
      className="modal"
      onClick={(e) => {
        const target: any = e.target
        if(target?.id === 'fp-modal') 
          closeModal();
      }}
    >
      <div
        className="modal-content"
      >
        <div className="modal-title">
          <h1>
            Share
            {" "}
            <span className="product-title-sharing">{name}</span>
          </h1>
          <div
            onClick={closeModal}
            className="close-button"
          >
            &times;
          </div>
        </div>

        <div className="modal-body">
          <div className="input-link-product">
            {productLink}
          </div>
          <div
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(productLink);
                // Change text to Copied in 2s
                setCopyText('Copied');
                setTimeout(() => {
                  setCopyText('Copy');
                }, 1500);
              } catch (err) {
                console.error('Failed to copy: ', err);
              }
            }}
            className="copy-link-button"
          >
            {copyText}
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-another-sharing">
            Share on social media
          </div>

          <div className="sharing-networks">
            <div
              className="sharing-network-button"
              id="twitter-sharing"
              onClick={() =>
                window.open(
                  'https://twitter.com/intent/tweet?url=' + productLink,
                  '_blank',
                )
              }
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pl-3 pr-1 pt-[7px] pb-[9px]"
              >
                <g clipPath="url(#clip0_4917_23117)">
                  <path
                    d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                    fill="#03A9F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4917_23117">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#202223] text-sm pt-[5px]">Tweet</span>
            </div>

            <div
              className="sharing-network-button"
              id="fb-sharing"
              onClick={() =>
                window.open(
                  'https://www.facebook.com/sharer/sharer.php?u=' + productLink,
                  '_blank',
                )
              }
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pl-3 pr-1 pt-[7px] pb-[9px]"
              >
                <path
                  d="M12 5.5H9V3.5C9 2.948 9.448 2.5 10 2.5H11V0H9C7.343 0 6 1.343 6 3V5.5H4V8H6V16H9V8H11L12 5.5Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="text-[#202223] text-sm pt-[5px]">Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementsByTagName('body')[0],
  );
}

export default ShareModal;
