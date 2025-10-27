interface TabContentProps {
    activeTab: 'about' | 'experiences' | 'recommended'
}

export default function TabContent({ activeTab }: TabContentProps) {
    const content = {
        about: {
            title: "About Me",
            text: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
        },
        experiences: {
            title: "Experiences",
            text: "Our experiences.",
        },
        recommended: {
            title: "Recommended",
            text: "Get in touch with us today!",
        },
    }

    return (
        <div className=" rounded-lg">
            <p className="text-content-text text-[20px] font-normal leading-relaxed font-plus-jakarta whitespace-pre-wrap w-[611px]">
                {content[activeTab].text}
            </p>
        </div>
    )
}