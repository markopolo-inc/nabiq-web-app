import { FiDotsVertical } from '@nabiq-icons';
import { Menu } from '@nabiq-ui';

export const PlanMenu = () => {
  return (
    <Menu width={240} position='bottom-start'>
      <Menu.Target>
        <FiDotsVertical color='#9AA4B2' />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <p>Cancel subscription</p>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
