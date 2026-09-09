export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`external-arrow ${className}`} width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 12 12 4M4 4h8v8" />
    </svg>
  );
}
