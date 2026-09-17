// app/components/AustraliaFlag.tsx

type AustraliaFlagProps = {
  className?: string;
};

export default function AustraliaFlag({ className = 'w-5 h-5' }: AustraliaFlagProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Circle mask so the flag is cropped into a round badge */}
        <clipPath id="flagCircle">
          <circle cx="10" cy="10" r="9" />
        </clipPath>

        {/* Clip for the Union Jack so it only fills the top-left quarter */}
        <clipPath id="ukClip">
          <rect x="0" y="0" width="12" height="6" />
        </clipPath>

        {/* Subtle inner shade for depth */}
        <radialGradient id="flagShade" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.10" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      {/* Flag content, cropped into a circle at radius 9 */}
      <g clipPath="url(#flagCircle)">
        {/* Blue background */}
        <rect width="20" height="20" fill="#00247D" />

        {/* Union Jack in the top-left corner */}
        <g clipPath="url(#ukClip)">
          <path d="M0,0 L12,6 M12,0 L0,6" stroke="#FFFFFF" strokeWidth="1.6" />
          <path d="M0,0 L12,6 M12,0 L0,6" stroke="#CF142B" strokeWidth="0.8" />
          <path d="M6,0 V6 M0,3 H12" stroke="#FFFFFF" strokeWidth="2.4" />
          <path d="M6,0 V6 M0,3 H12" stroke="#CF142B" strokeWidth="1.4" />
        </g>

        {/* Commonwealth Star below the Union Jack */}
        <path
          d="M6,7.9 L6.3,8.85 L7.3,8.85 L6.5,9.45 L6.8,10.4 L6,9.8 L5.2,10.4 L5.5,9.45 L4.7,8.85 L5.7,8.85 Z"
          fill="#FFFFFF"
        />

        {/* Southern Cross stars on the right side */}
        <circle cx="14.6" cy="4.2" r="0.6" fill="#FFFFFF" />
        <circle cx="17.4" cy="6.8" r="0.6" fill="#FFFFFF" />
        <circle cx="14.6" cy="11.4" r="0.6" fill="#FFFFFF" />
        <circle cx="12.4" cy="8.2" r="0.5" fill="#FFFFFF" />
        <circle cx="15.4" cy="8.6" r="0.35" fill="#FFFFFF" />

        {/* Soft shading layer */}
        <rect width="20" height="20" fill="url(#flagShade)" />
      </g>

      {/* Solid white circle border on top */}
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  );
}