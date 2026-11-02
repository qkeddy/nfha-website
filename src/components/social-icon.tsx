/** Simple monochrome social glyphs (lucide no longer ships brand icons). */
export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  } as const;
  switch (name) {
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.6v3.3h2.7V22H14v-10.2h2.7l.4-3.3H14Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.9-8.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM21.9 7.4c-.1-1.6-.4-3-1.6-4.2S17.7 1.7 16.1 1.6C14.5 1.5 9.5 1.5 7.9 1.6 6.3 1.7 4.9 2 3.7 3.2S2.1 5.8 2 7.4C1.9 9 1.9 15 2 16.6c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-7.6.1-9.2Zm-2.1 11a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9A3.3 3.3 0 0 1 6.1 4.7C7.4 4.2 10.5 4.3 12 4.3s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2-2.8V9.2a6.2 6.2 0 1 0 5.3 6.2V8.7a7.9 7.9 0 0 0 4.4 1.4V6.8A4.5 4.5 0 0 1 16.6 2Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M5.4 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.6 9h3.6v12H3.6V9Zm5.9 0h3.5v1.6c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-3.6v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v6H9.5V9Z" />
        </svg>
      );
    default:
      return null;
  }
}
