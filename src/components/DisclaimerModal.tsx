"use client";

import { useState, useEffect } from "react";

const DISCLAIMER_KEY = "disclaimerAccepted";

export default function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal only if not previously accepted
        const accepted = typeof window !== "undefined" && localStorage.getItem(DISCLAIMER_KEY);
        if (!accepted) {
            setIsOpen(true);
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        if (typeof window !== "undefined") {
            localStorage.setItem(DISCLAIMER_KEY, "true");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 text-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4 text-blue-400">Disclaimer</h2>
                    <div className="space-y-4 text-gray-300 text-sm">
                        <p>
                            The websites showcased in my portfolio represent projects I have worked on as a WordPress and Shopify
                            developer. While I have built most of these websites from scratch, some projects include only
                            specific sections, such as the homepage. Additionally, some websites may have been updated or
                            modified by other developers, designers, or website owners after my work was completed.
                        </p>
                        <p>
                            I am not responsible for any changes, updates, or modifications made to these websites after my
                            initial development. The current state of these sites may not fully reflect my original work.
                        </p>
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            onClick={closeModal}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                        >
                            I Agree
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
