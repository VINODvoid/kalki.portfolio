// useIntersectionObserver.ts
import { useEffect, useState, useRef, RefObject } from "react";

export function useIntersectionObserver(): [RefObject<HTMLDivElement | null>, boolean] {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		const currentRef = ref.current; // Store the ref value in a variable

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return [ref, isIntersecting];
}