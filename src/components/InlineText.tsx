import React from "react";

export default function InlineText({ text }: { text: string }) {
  return <>{formatInline(text)}</>;
}

function formatInline(text: string) {
  const boldParts = text.split("**");
  const nodes: React.ReactNode[] = [];

  boldParts.forEach((bp, bi) => {
    if (bi % 2 === 1) {
      nodes.push(<strong key={`b${bi}`}>{bp}</strong>);
    } else {
      const italicParts = bp.split("*");
      italicParts.forEach((ip, ii) => {
        nodes.push(ii % 2 === 1 ? <em key={`i${bi}-${ii}`}>{ip}</em> : ip);
      });
    }
  });

  return nodes;
}
