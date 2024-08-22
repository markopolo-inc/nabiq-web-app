import { Drawer as DrawerFiled, DrawerProps as DrawerFiledProps } from '@mantine/core';
import { FiCrossX } from '@nabiq-icons';

import styles from "./Style.module.scss";


export const DrawerHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <DrawerFiled.Header>
            <DrawerFiled.Title>{children}</DrawerFiled.Title>
            <DrawerFiled.CloseButton icon={<FiCrossX color='currentColor' />} />
        </DrawerFiled.Header>
    );
}

export const DrawerBody = ({ children }: { children: React.ReactNode }) => {
    return <DrawerFiled.Body>{children}</DrawerFiled.Body>;
}


export const Drawer = ({ opened, onClose, children, ...rest }: DrawerFiledProps) => {
    return (
        <DrawerFiled.Root
            opened={opened}
            onClose={onClose}
            classNames={{
                content: styles.drawer_content,
                header: styles.drawer_header,
            }}
            {...rest} >
            <DrawerFiled.Overlay />
            <DrawerFiled.Content>
                {children}
            </DrawerFiled.Content>
        </DrawerFiled.Root>
    )
}
