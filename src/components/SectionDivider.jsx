function SectionDivider() {
  return (
    <div className="container mx-auto px-6 py-8 md:py-12 flex items-center justify-center space-x-4">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-milpa/20 to-transparent"></div>
      <div className="flex-shrink-0">
        <svg className="w-8 h-8 text-milpa/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8.5C16 11.5 14.5 13.5 12 13.5C9.5 13.5 8 11.5 8 8.5C8 5.5 12 1.5 12 1.5C12 1.5 16 5.5 16 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13.5V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.5C11 22.5 10.5 20.5 9 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.5C13 22.5 13.5 20.5 15 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex-grow h-px bg-gradient-to-l from-transparent via-milpa/20 to-transparent"></div>
    </div>
  );
}

export default SectionDivider;