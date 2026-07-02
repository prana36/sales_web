export default function WhatsAppChatButton() {
  return (
    <a
      href="https://wa.me/917774863377"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] ring-1 ring-white/40 transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-[0_16px_36px_rgba(37,211,102,0.45)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.75 12.75 0 0 0 5.15 22.6L3.4 29l6.57-1.72A12.76 12.76 0 1 0 16.02 3.2Zm0 23.35c-2.1 0-4.05-.62-5.7-1.7l-.4-.25-3.9 1.02 1.04-3.8-.26-.4a10.58 10.58 0 1 1 9.22 5.13Zm5.8-7.9c-.32-.16-1.88-.93-2.18-1.03-.29-.1-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.22.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
