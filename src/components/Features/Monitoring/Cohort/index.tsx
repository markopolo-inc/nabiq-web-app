import { Handle, Position } from "@xyflow/react"
import { useState } from "react"

const OperationItem = () => {
    return (
        <div className="flex justify-between">
            <div className="text-gray-600 text-xs font-semibold leading-[18px]">
                Engagement rate
            </div>

            <div className="text-gray-600 text-xs font-normal leading-[18px]">
                21%
            </div>
        </div>
    )
}

const Index = () => {
    const [isOperationOpen, setIsOperationOpen] = useState<boolean>(false)

    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                id="b"
            />
            <div onClick={() => setIsOperationOpen((prev) => !prev)} className="w-[262px] flex flex-col flex-start gap-8 p-[16px_24px_16px_16px] rounded-xl border border-gray-200 bg-white shadow-sm hover:cursor-pointer">
                <div className="flex justify-between items-center w-full">
                    <div className="text-gray-900 text-[16px] font-semibold leading-6">Cohort 1</div>
                    <div className="flex items-center py-0.5 px-2 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 text-center text-xs font-medium leading-[18px]">
                        Size 20,174
                    </div>
                </div>

                {isOperationOpen ? (
                    <div className="flex flex-col gap-3">
                        <OperationItem />
                        <OperationItem />
                        <OperationItem />
                        <OperationItem />
                        <OperationItem />
                        <OperationItem />
                        <OperationItem />
                    </div>) : <></>}
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="c"
            />
        </>
    )
}

export default Index
