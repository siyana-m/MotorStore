import React from "react";
import {Link} from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionMenu() {
    return(
        <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion_button'>
                        <span>"item.title"</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                
                <AccordionItemPanel className='accordion_panel'>
                    <p>
                        <span>"item_type.panel"</span>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
