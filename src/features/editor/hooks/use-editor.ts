import { useCallback } from "react"

export const useEditor = () => {
    const init = useCallback(({
        initialcanvasRef,
        initialworkspaceRef,
    }: {
        initialcanvasRef: any,
        initialworkspaceRef: HTMLDivElement,
    }) => {
        console.log("initializig editor")
    }, [])
    return { init }
}