import { TrackerBar } from "@/components/TrackerComponents/TrackerBar"

const TimeTracker = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="items-center">
                    <TrackerBar/>
                </div>
            </div>
        </>
    )
    
}

export default TimeTracker