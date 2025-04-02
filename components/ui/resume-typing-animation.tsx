import React from 'react';

export function ResumeTypingAnimation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Document Background - Uses CSS var for theme compatibility */}
      <rect
        x="5"
        y="5"
        width="90"
        height="110"
        rx="3"
        ry="3"
        className="fill-[var(--card)] stroke-current" // Use CSS variable for fill, currentColor for stroke
        strokeWidth="1"
      />

      {/* Blinking Cursor */}
      <rect x="15" y="20" width="2" height="8" className="cursor fill-current"> {/* Use currentColor */}
        {/* Opacity animation for blinking effect */}
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Text Lines (appearing sequentially) */}
      {/* Each line appears (opacity 0 to 1) and then disappears (opacity 1 to 0) before the loop restarts */}
      <line x1="15" y1="25" x2="75" y2="25" className="line line-1 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="0.5s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>
      <line x1="15" y1="35" x2="85" y2="35" className="line line-2 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="1s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>
      <line x1="15" y1="45" x2="65" y2="45" className="line line-3 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="1.5s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>
      <line x1="15" y1="55" x2="80" y2="55" className="line line-4 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="2s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>
      <line x1="15" y1="65" x2="70" y2="65" className="line line-5 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="2.5s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>
      <line x1="15" y1="75" x2="75" y2="75" className="line line-6 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="3s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>
      <line x1="15" y1="85" x2="60" y2="85" className="line line-7 stroke-current" strokeWidth="2" opacity="0">
         <animate attributeName="opacity" values="0;1" begin="3.5s" dur="0.1s" fill="freeze" />
         <animate attributeName="opacity" values="1;0" begin="5.5s" dur="0.1s" fill="freeze" />
      </line>

       {/* Invisible element with indefinite animation forces the browser to loop the sequence */}
       <rect width="1" height="1" opacity="0">
          <animate attributeName="opacity" dur="6s" repeatCount="indefinite" />
       </rect>
    </svg>
  );
} 