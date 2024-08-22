import { Drawer as DrawerFiled, DrawerProps as DrawerFiledProps, DrawerHeaderProps as DrawerHeaderFieldProps, DrawerBodyProps as DrawerBodyFiledProps } from '@mantine/core';
import { FiCrossX } from '@nabiq-icons';

import styles from "./Style.module.scss";


type DrawerHeaderPropsType = DrawerHeaderFieldProps

export const DrawerHeader = ({ children }: DrawerHeaderPropsType) => {
    return (
        <DrawerFiled.Header>
            <DrawerFiled.Title>{children}</DrawerFiled.Title>
            <DrawerFiled.CloseButton icon={<FiCrossX color='currentColor' />} />
        </DrawerFiled.Header>
    );
}

export const DrawerBody = ({ children }: DrawerBodyFiledProps) => {
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
                body: styles.drawer_body
            }}
            {...rest} >
            <DrawerFiled.Overlay />
            <DrawerFiled.Content>
                {children}
            </DrawerFiled.Content>
        </DrawerFiled.Root>
    )
}
