import React, { useState, useEffect } from "react";

import "../styles/components/tab.scss";

const Tab = ({ tabInformation }) => {
  const { tabs, panels } = tabInformation;
  const [activeTab, setActiveTab] = useState("");
  const [activePanel, setActivePanel] = useState([]);

  useEffect(() => {
    //TODO Fix the performance. Because the useEffect is called so many times.
    console.log("useEffect[:value:]");
    if (activeTab !== "") {
      let panelSelected = panels.find((panel) => panel.id === activeTab);
      setActivePanel(panelSelected.information);
    }
  }, [activeTab]);

  useEffect(() => {
    console.log("useEffect[]");
    setActiveTab(tabs[0].id);
    let panelSelected = panels.find((panel) => panel.id === tabs[0].id);
    console.log(panelSelected);
    setActivePanel(panelSelected.information);
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
      {activeTab.length !== 0 ? (
        <div className="tab__panel">
          {activePanel.map((element) => (
            <div title={element.title} className="block" key={element.title}>
              <img
                loading="lazy"
                className="block__image"
                src={`../src/assets/icons/${element.icon}.png`}
                alt={element.title}
              />
              <p className="block__text" key={element.title}>
                {element.title}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Tab;
