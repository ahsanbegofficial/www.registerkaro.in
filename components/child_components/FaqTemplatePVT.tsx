import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
    list?: string[];
}

interface FaqProps {
    faqItems: FaqItem[];
}

export const FaqTemplatePVT: React.FC<FaqProps> = ({ faqItems }) => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleItemClick = (itemId: number) => {
        if (itemId === openItem) {
            setOpenItem(null);
        } else {
            setOpenItem(itemId);
        }
    };

    return (
        <div className='faq' id='Faq'>
            <div>
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`list ${openItem === index ? 'open' : 'close'}`}
                    >
                        <div onClick={() => handleItemClick(index)} className='flex point'>
                            <h3 className='questions'>{item.question}</h3>
                            <div>
                                <span className={`icon ${openItem === index ? 'cross' : 'plus'}`}></span>
                            </div>
                        </div>
                        <div className='answers'>
                            {item.answer && <p>{item.answer}</p>}
                            {item.list && (
                                <ul className='faq-list'>
                                    {item.list.map((e, i) => (
                                        <li key={i}>{e}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};