"use client";

import React, {useEffect, useRef, useState} from 'react'


const allTabs = [
    {
        index: 0,
        name: "profile",
        display: "Profile",
    },
    {
        index: 1,
        name: "experience",
        display: "My Journey",
    },
    {
        index: 2,
        name: "projects",
        display: "Achievements",
    }
];

interface SlidingTabBarProps {
    activeTabIndex?: number;
    defaultActiveTabIndex?: number;
    onTabChange?: (index: number) => void;
}

const SlidingTabBar = ({
                           activeTabIndex: controlledIndex,
                           defaultActiveTabIndex = 0,
                           onTabChange,
                       }: SlidingTabBarProps) => {
    const isControlled = controlledIndex !== undefined;
    const [internalIndex, setInternalIndex] = useState(defaultActiveTabIndex);
    const activeTabIndex = isControlled ? controlledIndex : internalIndex;

    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const handleTabClick = (index: number) => {
        if (!isControlled) {
            setInternalIndex(index);
        }
        onTabChange?.(index);
    };

    useEffect(() => {
        if (activeTabIndex === null) return;

        const currentTab = tabsRef.current[activeTabIndex];
        if (currentTab) {
            setTabUnderlineLeft(currentTab.offsetLeft);
            setTabUnderlineWidth(currentTab.clientWidth);
        }
    }, [activeTabIndex]);

    useEffect(() => {
        if (activeTabIndex === null) {
            return;
        }

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        };

        setTabPosition();
    }, [activeTabIndex]);

    return (
        <div className="relative mb-7 mx-auto flex h-12 flex-row rounded-3xl border border-gray-500 bg-[#161513] px-2 backdrop-blur-sm">
      <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-500" />
      </span>

            {allTabs.map((tab, index) => {
                const isActive = activeTabIndex === index;

                return (
                    <button
                        key={tab.index}
                        ref={(el) => {
                            tabsRef.current[index] = el;
                        }}
                        className={`${
                            isActive ? "" : "hover:text-neutral-300"
                        } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.display}
                    </button>
                );
            })}
        </div>
    );
}

// const SlidingTabBar = () => {
//     const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
//     const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
//     const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
//     const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
//
//     useEffect(() => {
//         if (activeTabIndex === null) {
//             return;
//         }
//
//         const setTabPosition = () => {
//             const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
//             setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
//             setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
//         };
//
//         setTabPosition();
//     }, [activeTabIndex]);
//
//     return (
//         <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-gray-500 bg-[#161513] px-2 backdrop-blur-sm mb-7">
//           <span
//               className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
//               style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }} >
//             <span className="h-full w-full rounded-3xl bg-gray-500" />
//           </span>
//             {allTabs.map((tab, index) => {
//                 const isActive = activeTabIndex === index;
//
//                 return (
//                     <button
//                         key={index}
//                         ref={(el) => {
//                             tabsRef.current[index] = el;
//                         }}
//                         className={`${
//                             isActive ? `` : `hover:text-neutral-300`
//                         } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
//                         onClick={() => setActiveTabIndex(index)}
//                     >
//                         {tab.name}
//                     </button>
//                 );
//             })}
//         </div>
//     );
// }
export default SlidingTabBar
