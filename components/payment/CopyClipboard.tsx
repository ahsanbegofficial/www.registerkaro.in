import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyClipboardProps {
    url: string
}

export const CopyClipboard: React.FC<CopyClipboardProps> = ({ url }) => {
    const [copied, setCopied] = useState(false);

    return (
        <CopyToClipboard onCopy={() => setCopied(true)} text={url}>
            <button className={`copyBtn ${copied ? "copied" : "copy"}`}>{copied ? "Copied" : "Copy"}</button>
        </CopyToClipboard>
    )
}