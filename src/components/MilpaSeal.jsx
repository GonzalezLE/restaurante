function MilpaSeal() {
  return (
    <div className="flex flex-col items-center gap-4 my-12 text-center animate-fade-in-up">
      
      <img 
        src="/guardianes-milpa-logo.png" // 📸 Coloca el logo en tu carpeta `public`
        alt="Sello Guardianes de la Milpa"
        className="w-24 h-auto"
      />
      <div className="max-w-md">
        <h4 className="font-serif text-xl text-milpa">Certificación "Guardianes de la Milpa"</h4>
        <p className="text-comal/80 mt-1">
          Este sello garantiza que nuestro maíz es criollo, cultivado bajo prácticas agroecológicas y de comercio justo, protegiendo la herencia biocultural de Puebla.
        </p>
      </div>
    </div>
  );
}

export default MilpaSeal;