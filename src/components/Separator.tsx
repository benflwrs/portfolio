import { JSX } from "react";

export function SectionSeparator(): JSX.Element {
  return (
    <div style={{
      width: '60%',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #333, transparent)',
      margin: '0 auto'
    }}></div>
  );
}
