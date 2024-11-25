import { Modal as MantineModal } from '@mantine/core';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';

import CloseButton from '../CloseButton';
import classes from './Modal.module.scss';

const Modal = ({
  title = () => <></>,
  body,
  children,
  size = 'lg',
  centered = true,
  style = {},
  onClose,
  zIndex = 999,
  closeOnClickOutside = false,
  closeOnEscape = false,
  withCloseButton = true,
  withNoHeader = false,
  withCustomClose = false,
  toggleFromOutside = false,
  setToggleFromOutside = undefined,
}: PropTypes) => {
  const [modalOpened, setModalOpened] = useState(toggleFromOutside);

  const setOpened = (openedState: boolean) => {
    setModalOpened((prevState) => {
      if (setToggleFromOutside) {
        setToggleFromOutside(openedState);
      }
      // preventing close function to be called multiple times
      if (prevState && !openedState && onClose) {
        onClose(setOpened);
      }
      return openedState;
    });
  };

  useEffect(() => {
    setOpened(toggleFromOutside);
  }, [toggleFromOutside]);

  return (
    <>
      {children({ setOpened })}
      <MantineModal
        centered={centered}
        withCloseButton={withCloseButton}
        closeOnClickOutside={closeOnClickOutside}
        closeOnEscape={closeOnEscape}
        title={title({ setOpened })}
        size={size}
        opened={modalOpened}
        padding={0}
        zIndex={zIndex}
        onClose={() => {
          setOpened(false);
        }}
        classNames={{
          content: classes.content,
          header: classes.header,
        }}
        style={{ ...style }}
        styles={{
          header: {
            display: withNoHeader || withCustomClose ? 'none' : 'false',
          },
        }}
      >
        <>
          {withCustomClose && (
            <div style={{ position: 'absolute', right: 20, top: 30, zIndex: 100 }}>
              <CloseButton
                size='md'
                onClick={() => {
                  setOpened(false);
                }}
              />
            </div>
          )}
          {body({ setOpened })}
        </>
      </MantineModal>
    </>
  );
};

export default Modal;

interface PropTypes {
  title?: ({ setOpened }: { setOpened: (state: boolean) => void }) => ReactNode;
  body: ({ setOpened }: { setOpened: (state: boolean) => void }) => ReactNode;
  children: ({ setOpened }: { setOpened: (state: boolean) => void }) => ReactNode;
  style?: CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;
  onClose?: any;
  zIndex?: number;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  withCloseButton?: boolean;
  withNoHeader?: boolean;
  withCustomClose?: boolean;
  toggleFromOutside?: boolean;
  setToggleFromOutside?: any;
  centered?: boolean;
}
