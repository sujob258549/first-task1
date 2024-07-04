import { useState } from 'react';

const AccordionSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="mt-20 md:mt-32 px-4 md:px-8">
                <div id="accordion-flush" className="">
                    <div>
                        <button className="btn rounded-full text-[16px] px-6 btn-outline">Fuq</button>
                        <h2 className='text-2xl md:text-4xl font-semibold py-5'>Frequntly Asked Question</h2>
                    </div>
                    <h3 id="accordion-flush-heading-1">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full py-5 px-4 text-[20px] bg-[#FFFFF5] font-medium text-left border-b border-gray-200 dark:border-gray-700  dark:bg-gray-900 text-gray-900 dark:text-white"
                            onClick={() => toggleAccordion(1)}
                            aria-expanded={openIndex === 1}
                            aria-controls="accordion-flush-body-1"
                        >
                            <span> What are your office hours?</span>
                            <svg
                                className={`w-6 h-6 shrink-0 ${openIndex === 1 ? 'rotate-180' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h3>
                    <div
                        id="accordion-flush-body-1"
                        className={openIndex === 1 ? '' : 'hidden'}
                        aria-labelledby="accordion-flush-heading-1"
                    >
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                            </p>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-2">
                        <button
                            type="button"
                            className="flex items-center justify-between text-[20px] w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-[#FFFFF5] text-gray-500 dark:text-gray-400"
                            onClick={() => toggleAccordion(2)}
                            aria-expanded={openIndex === 2}
                            aria-controls="accordion-flush-body-2"
                        >
                            <span>How can I schedule an appointment?</span>
                            <svg
                                className={`w-6 h-6 shrink-0 ${openIndex === 2 ? 'rotate-180' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h3>
                    <div
                        id="accordion-flush-body-2"
                        className={openIndex === 2 ? '' : 'hidden'}
                        aria-labelledby="accordion-flush-heading-2"
                    >
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out the{' '}
                                <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                    Figma design system
                                </a>{' '}
                                based on the utility classes from Tailwind CSS and components from Landwind.
                            </p>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-3">
                        <button
                            type="button"
                            className="flex text-[20px] items-center bg-[#FFFFF5] justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                            onClick={() => toggleAccordion(3)}
                            aria-expanded={openIndex === 3}
                            aria-controls="accordion-flush-body-3"
                        >
                            <span>Do you accept insurance?</span>
                            <svg
                                className={`w-6 h-6 shrink-0 ${openIndex === 3 ? 'rotate-180' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h3>
                    <div
                        id="accordion-flush-body-3"
                        className={openIndex === 3 ? '' : 'hidden'}
                        aria-labelledby="accordion-flush-heading-3"
                    >
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                <li>
                                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                        Landwind Pro
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-4">
                        <button
                            type="button"
                            className="flex text-[20px] items-center bg-[#FFFFF5] justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                            onClick={() => toggleAccordion(4)}
                            aria-expanded={openIndex === 4}
                            aria-controls="accordion-flush-body-4"
                        >
                            <span>What should I bring to my appointment?</span>
                            <svg
                                className={`w-6 h-6 shrink-0 ${openIndex === 4 ? 'rotate-180' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h3>
                    <div
                        id="accordion-flush-body-4"
                        className={openIndex === 4 ? '' : 'hidden'}
                        aria-labelledby="accordion-flush-heading-4"
                    >
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                <li>
                                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                        Landwind Pro
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-4">
                        <button
                            type="button"
                            className="flex text-[20px] items-center bg-[#FFFFF5] justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                            onClick={() => toggleAccordion(4)}
                            aria-expanded={openIndex === 4}
                            aria-controls="accordion-flush-body-4"
                        >
                            <span>Do you offer telemedicine appointments?</span>
                            <svg
                                className={`w-6 h-6 shrink-0 ${openIndex === 4 ? 'rotate-180' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h3>
                    <div
                        id="accordion-flush-body-4"
                        className={openIndex === 4 ? '' : 'hidden'}
                        aria-labelledby="accordion-flush-heading-4"
                    >
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                <li>
                                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                        Landwind Pro
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </div>
    );
};

export default AccordionSection;
