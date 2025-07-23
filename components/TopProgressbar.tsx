"use client";

import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";

let timer: ReturnType<typeof setTimeout> | undefined;
let state: "loading" | "stop" | undefined;
let activeRequests = 0;

function load() {
	if (state === "loading") return;
	state = "loading";
	timer = setTimeout(() => {
		NProgress.start();
	}, 1);
}

function stop() {
	if (activeRequests > 0) return;
	state = "stop";
	clearTimeout(timer);
	NProgress.done();
}

function routeChangeStart() {
	if (window.location.pathname !== Router.pathname) {
		load();
	}
}

export default function TopProgressbar() {
	useEffect(() => {
		// Only run on client
		if (typeof window === "undefined") return;

		Router.events.on("routeChangeStart", routeChangeStart);
		Router.events.on("routeChangeComplete", stop);
		Router.events.on("routeChangeError", stop);

		// Override fetch only once
		const originalFetch = window.fetch;
		window.fetch = async function (...args) {
			if (activeRequests === 0) {
				load();
			}
			activeRequests++;

			try {
				const response = await originalFetch(...args);
				return response;
			} catch (error) {
				return Promise.reject(error);
			} finally {
				activeRequests -= 1;
				if (activeRequests === 0) {
					stop();
				}
			}
		};

		// Cleanup on unmount
		return () => {
			Router.events.off("routeChangeStart", routeChangeStart);
			Router.events.off("routeChangeComplete", stop);
			Router.events.off("routeChangeError", stop);
			window.fetch = originalFetch;
		};
	}, []);

	return null;
}
