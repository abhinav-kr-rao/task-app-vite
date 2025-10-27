import { useState } from 'react'
import TabContent from './TabContent'
import LeftSide from './LeftSide'

export default function TabsWidget() {

    const [activeTab, setActiveTab] = useState<'about' | 'experiences' | 'recommended'>('about')

    const tabs = [
        { id: 'about' as const, label: 'About Me' },
        { id: 'experiences' as const, label: 'Experiences' },
        { id: 'recommended' as const, label: 'Recommended' },
    ]

    return (
        <div className="bg-widget-bg rounded-18.89 shadow-widget min-h-[316px] w-[650px] mx-auto p-4 flex gap-4">

            <div className="w-6 flex-shrink-0">
                <LeftSide />
            </div>

            {/* Main Tabs Content */}
            <div className="flex-1 min-w-0 overflow-hidden">

                <nav className="bg-nav-bg rounded-23 p-2 mb-6">
                    <div className="flex rounded-23 shadow-nav-inset w-auto justify-around bg-nav-bg">
                        {tabs.map((tab) => (
                            <button
                                type="button"
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 w-[180px] h-[49px] rounded-[16px] flex justify-center items-center font-medium transition-all duration-200 relative overflow-hidden group ${activeTab === tab.id
                                    ? "bg-active-tab text-white shadow-tab-active"
                                    : "text-inactive-text"
                                    }`}
                            >

                                {activeTab !== tab.id && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/25 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                )}


                                <span className="font-poppins font-medium text-[18px] leading-[16.12px] relative z-10">
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="">
                    <div className="w-auto m-auto">
                        <TabContent activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </div>
    )
}