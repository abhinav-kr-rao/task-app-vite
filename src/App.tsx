import TabsWidget from './components/TabsWidget'
import GalleryWidget from './components/GalleryWidget'
import Bar from './components/Bar'

/**
 * Main App Component - MacBook Pro Layout
 * Recreated from Figma design with exact specifications
 */
function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gradient-start to-gradient-end overflow-hidden relative rounded-[28px] shadow-macbook">
            {/* MacBook Pro Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Left Half - Empty for laptop screens */}
                <div className="hidden md:block">
                    {/* This side is intentionally left empty as per design requirements */}
                </div>

                {/* Right Half - Widgets */}
                <div className="flex flex-col gap-y-16 p-4 pt-24">
                    <TabsWidget />
                    <Bar className=' h-1' />
                    <GalleryWidget />
                    <Bar className=' h-1' />
                </div>
            </div>
        </div>
    )
}

export default App

