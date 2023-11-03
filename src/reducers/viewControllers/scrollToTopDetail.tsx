import { useRef } from "react"
const ScrollToTopDetail = () => {
    const flatListRef = useRef<any>(null);
    
    const btnScrollToTop = () => {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
    return {
        flatListRef,
        btnScrollToTop
    }
}

export default ScrollToTopDetail;