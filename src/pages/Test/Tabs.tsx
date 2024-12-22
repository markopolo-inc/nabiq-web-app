import React, { useEffect, useRef, useState } from 'react';

import './Tabs.scss';

interface TabProps {
  children: React.ReactNode;
  defaultTab?: string;
  maxVisibleTabs?: number;
}

interface TabPanelProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabProps> = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleTabs, setVisibleTabs] = useState<React.ReactElement[]>([]);
  const [overflowTabs, setOverflowTabs] = useState<React.ReactElement[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabPanels = React.Children.toArray(children) as React.ReactElement<TabPanelProps>[];

  // Set initial tabs to all visible
  useEffect(() => {
    setVisibleTabs(tabPanels);
    setOverflowTabs([]);
  }, []);

  useEffect(() => {
    if (!activeTab && tabPanels.length > 0) {
      setActiveTab(tabPanels[0].props.id);
    }
  }, [children]);

  useEffect(() => {
    if (!tabsListRef.current) return;

    const calculateVisibleTabs = () => {
      const tabsList = tabsListRef.current;
      if (!tabsList) return;

      // Set all tabs as visible initially to measure their widths
      setVisibleTabs(tabPanels);
      setOverflowTabs([]);

      // Wait for the next frame to ensure DOM is updated
      requestAnimationFrame(() => {
        const tabsListWidth = tabsList.offsetWidth;
        const moreButtonWidth = 80;
        let availableWidth = tabsListWidth - moreButtonWidth;
        let visibleCount = 0;

        const tabButtons = tabsList.querySelectorAll('.tab-button:not(.more-button)');

        for (let i = 0; i < tabButtons.length; i++) {
          const tab = tabButtons[i] as HTMLElement;
          if (availableWidth >= tab.offsetWidth) {
            availableWidth -= tab.offsetWidth;
            visibleCount++;
          } else {
            break;
          }
        }

        // Only update if we need to show overflow
        if (visibleCount < tabPanels.length) {
          setVisibleTabs(tabPanels.slice(0, visibleCount));
          setOverflowTabs(tabPanels.slice(visibleCount));
        }
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleTabs();
    });

    resizeObserver.observe(tabsListRef.current);
    calculateVisibleTabs();

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderTabButton = (panel: React.ReactElement<TabPanelProps>) => (
    <button
      key={panel.props.id}
      className={`tab-button ${activeTab === panel.props.id ? 'active' : ''}`}
      onClick={() => {
        setActiveTab(panel.props.id);
        setShowDropdown(false);
      }}
      role='tab'
      aria-selected={activeTab === panel.props.id}
      aria-controls={`${panel.props.id}-panel`}
      id={`${panel.props.id}-tab`}
    >
      {panel.props.label}
    </button>
  );

  return (
    <div className='tabs-container'>
      <div className='tabs-list' role='tablist' ref={tabsListRef}>
        {visibleTabs.map(renderTabButton)}

        {overflowTabs.length > 0 && (
          <div className='more-tabs-dropdown' ref={dropdownRef}>
            <button
              className={`tab-button more-button ${showDropdown ? 'active' : ''}`}
              onClick={() => setShowDropdown(!showDropdown)}
              aria-haspopup='true'
              aria-expanded={showDropdown}
            >
              More
            </button>
            {showDropdown && (
              <div className='dropdown-menu'>{overflowTabs.map(renderTabButton)}</div>
            )}
          </div>
        )}
      </div>

      <div className='tab-content'>
        {tabPanels.map((panel) => (
          <div
            key={panel.props.id}
            role='tabpanel'
            id={`${panel.props.id}-panel`}
            aria-labelledby={`${panel.props.id}-tab`}
            hidden={activeTab !== panel.props.id}
          >
            {panel.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};

const TabsImplemented = () => {
  return (
    <div className='p-8'>
      <Tabs defaultTab='tab1' maxVisibleTabs={6}>
        <TabPanel id='tab1' label='Dashboard'>
          <h2>Welcome to your Dashboard</h2>
          <p>Overview of your main metrics and activities</p>
        </TabPanel>
        <TabPanel id='tab2' label='Profile'>
          <h2>User Profile</h2>
          <p>Manage your personal information and settings</p>
        </TabPanel>
        <TabPanel id='tab3' label='Analytics'>
          <h2>Analytics Dashboard</h2>
          <p>View detailed statistics and reports</p>
        </TabPanel>
        <TabPanel id='tab4' label='Messages'>
          <h2>Message Center</h2>
          <p>Your inbox and communication hub</p>
        </TabPanel>
        <TabPanel id='tab5' label='Settings'>
          <h2>System Settings</h2>
          <p>Configure application preferences</p>
        </TabPanel>
        <TabPanel id='tab6' label='Projects'>
          <h2>Project Management</h2>
          <p>Overview of ongoing and completed projects</p>
        </TabPanel>
        <TabPanel id='tab7' label='Calendar'>
          <h2>Calendar View</h2>
          <p>Schedule and upcoming events</p>
        </TabPanel>
        <TabPanel id='tab8' label='Documents'>
          <h2>Document Library</h2>
          <p>Access and manage your files</p>
        </TabPanel>
        <TabPanel id='tab9' label='Team'>
          <h2>Team Members</h2>
          <p>Collaborate with your team</p>
        </TabPanel>
        <TabPanel id='tab10' label='Reports'>
          <h2>Report Center</h2>
          <p>Generate and view reports</p>
        </TabPanel>
        <TabPanel id='tab11' label='Help'>
          <h2>Help Center</h2>
          <p>FAQs and support resources</p>
        </TabPanel>
        <TabPanel id='tab12' label='Notifications'>
          <h2>Notification Center</h2>
          <p>View your alerts and updates</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsImplemented;
