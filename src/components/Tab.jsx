import React, { useState, useEffect } from "react";

const Tab = ({ tabInformation }) => {
  const { tabs, panels } = tabInformation;
  const [activeTab, setActiveTab] = useState("");
  const [activePanel, setActivePanel] = useState([]);

  useEffect(() => {
    //TODO Fix the performance. Because the useEffect is called so many times.
    console.log("useEffect[]");
    let panelSelected = panels.find((panel) => panel.id === activeTab);
    setActivePanel(panelSelected);
  }, [activeTab]);

  useEffect(() => {
    console.log("useEffect[]");
    let panelSelected = panels.find((panel) => panel.id === tabs[0].id);
    setActivePanel(panelSelected);
    setActiveTab(tabs[0].id);
  }, []);

  return (
    <>
      <div className="tab">
        <nav className="tab__navigation">
          <ul className="tab__list">
            {tabs.map((tab) => (
              <li
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "tab__item--active" : "tab__item"
                }`}
                key={tab.id}
              >
                {tab.text}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {activeTab ? (
        <div className="tab__panel">{<p>{activePanel.text}</p>}</div>
      ) : null}
    </>
  );
};

export default Tab;
