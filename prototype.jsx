import React, { useState, useEffect } from 'react';
import { 
  Youtube, 
  Instagram, 
  Tv, 
  Users, 
  MapPin, 
  PlayCircle, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle2,
  Star,
  Smartphone,
  Share2,
  Clock,
  Award,
  BarChart3
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Exposición prolongada",
      desc: "Cada programa genera cientos de horas de visualización real.",
      icon: <Clock className="w-6 h-6 text-red-500" />
    },
    {
      title: "Pantalla grande",
      desc: "El mayor tiempo de consumo ocurre en televisores, con un promedio de 30 minutos.",
      icon: <Tv className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Alcance en redes",
      desc: "Los reels superan las 20.000 visualizaciones promedio.",
      icon: <Smartphone className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Circulación social",
      desc: "Los contenidos se comparten activamente dentro de la comunidad (100 por reel).",
      icon: <Share2 className="w-6 h-6 text-green-400" />
    },
    {
      title: "Contexto local",
      desc: "Historias e invitados que pertenecen a Coronel Suárez y la región.",
      icon: <MapPin className="w-6 h-6 text-yellow-500" />
    }
  ];

  const packages = [
    {
      title: "Sponsor del programa",
      tag: "Presencia Institucional",
      description: "Mención de agradecimiento en cada emisión del programa.",
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "PNT integrado",
      tag: "Orgánico",
      description: "Mención comercial natural dentro de la conversación de la mesa.",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Presencia de marca en mesa",
      tag: "Visual",
      description: "Productos o elementos de tu marca visibles durante todo el programa.",
      icon: <Tv className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Contenido especial con figuras",
      tag: "Redes Sociales",
      description: "Piezas producidas específicamente para redes sociales con las figuras del programa.",
      highlight: true,
      icon: <PlayCircle className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-500 selection:text-white scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl italic">V</div>
            <span className="font-bold text-xl tracking-tighter uppercase hidden sm:block">Radio del Volga</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#programa" className="hover:text-white transition-colors">El Programa</a>
            <a href="#alcance" className="hover:text-white transition-colors">Alcance</a>
            <a href="#atractivo" className="hover:text-white transition-colors">Por qué elegirnos</a>
            <a href="#comercial" className="hover:text-white transition-colors">Participación Comercial</a>
          </div>
          <a href="#comercial" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Ver Opciones
          </a>
        </div>
      </nav>

      {/* Bloque 1 — Presentación (Hero) */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80" 
            alt="Studio Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest border border-red-600/30">
                <MapPin className="w-3 h-3" /> Coronel Suárez y la región
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tight">
              LA ÚLTIMA <br />
              <span className="text-red-600">CENA</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-6">
              Streaming de historias locales.
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-2xl">
              Historias de vecinos y proyectos de Coronel Suárez y la región, con un formato conversacional que permite profundizar en cada experiencia, generando cercanía con la comunidad y conexión con el público.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#alcance" className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all">
                Conocer Métricas <BarChart3 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloques 2 y 3 — Alcance en YouTube e Instagram */}
      <section id="alcance" className="py-24 bg-neutral-900/50 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">El impacto en números</h2>
            <p className="text-neutral-400 text-lg">
              No medimos solo vistas, medimos <strong>atención real</strong>. Nuestro contenido funciona más cerca del formato televisivo que del consumo rápido de redes sociales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            
            {/* YouTube Stats */}
            <div className="bg-neutral-800/30 rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-red-600/30 transition-colors flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Youtube className="w-64 h-64" />
              </div>
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-8">
                  <Youtube className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-black">YouTube</h3>
                </div>
                
                <div className="flex flex-col gap-6 mb-8 flex-grow">
                  <div>
                    <p className="text-4xl font-black text-white mb-1">1.900</p>
                    <p className="text-sm text-neutral-300 font-bold uppercase tracking-wider mb-2">Promedio de reproducciones</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Este número en YouTube muestra que La Última Cena mantiene un público constante, interesado en historias locales y conversaciones profundas.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-900/10 rounded-2xl p-6 border border-blue-500/30 mt-auto relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="flex items-start gap-4">
                    <Tv className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1 block">Dato Principal</span>
                      <h4 className="font-bold text-white mb-2 text-lg leading-tight">Smart TV: el dispositivo con mayor tiempo de consumo</h4>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        La audiencia que ve La Última Cena en Smart TV permanece más tiempo frente a la pantalla, disfrutando la experiencia de la televisión tradicional: pantalla grande, atención sostenida y consumo concentrado. Esto ofrece un espacio de exposición prolongada y altamente efectivo para la marca.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Stats */}
            <div className="bg-neutral-800/30 rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-pink-600/30 transition-colors flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Instagram className="w-64 h-64" />
              </div>
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-8">
                  <Instagram className="w-8 h-8 text-pink-500" />
                  <h3 className="text-2xl font-black">Instagram (Reels)</h3>
                </div>
                
                <div className="flex flex-col gap-6 mb-8 flex-grow">
                  <div>
                    <p className="text-4xl font-black text-white mb-1">600.000</p>
                    <p className="text-sm text-neutral-300 font-bold uppercase tracking-wider mb-2">Visualizaciones acumuladas</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Cada reel en Instagram llega a una gran cantidad de personas, manteniendo activo el contenido del programa y ampliando la presencia de la marca en redes.
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white mb-1">20.000</p>
                    <p className="text-sm text-neutral-300 font-bold uppercase tracking-wider mb-2">Promedio por reel</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Cada reel funciona como un micro-impacto: la marca aparece de forma breve, atractiva y con gran alcance dentro de la plataforma.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-950/50 rounded-2xl p-6 border border-white/5 mt-auto">
                  <div className="flex items-start gap-4">
                    <Share2 className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2">100 compartidos promedio</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        Los espectadores comparten el contenido de manera espontánea en Instagram, ayudando a que la marca llegue a más personas dentro de la comunidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bloques 4 y 5 — Tipo de contenido y Por qué es atractivo */}
      <section id="atractivo" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">El Contenido</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Protagonistas de nuestra <span className="text-red-600">comunidad</span></h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Historias de vecinos y proyectos de Coronel Suárez y la región, con un formato conversacional que permite profundizar en cada experiencia, generando cercanía con la comunidad y conexión con el público.
              </p>
              
              <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 relative">
                <Award className="absolute -top-4 -left-4 w-10 h-10 text-yellow-500 bg-neutral-950 rounded-full p-2 border border-white/10" />
                <p className="italic text-neutral-300">
                  "Para los auspiciantes, este contexto genera una presencia natural dentro de un espacio donde el público presta atención durante períodos prolongados."
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-black mb-8">¿Por qué es un espacio atractivo para las marcas?</h3>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-neutral-900/50 transition-colors border border-transparent hover:border-white/5">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-neutral-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bloque 6 — Formas de participación comercial */}
      <section id="comercial" className="py-24 bg-neutral-900/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Formas de participación</h2>
            <p className="text-neutral-400">Diseñamos espacios comerciales que se integran orgánicamente al contenido, respetando la atención del usuario.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                  pkg.highlight 
                    ? 'bg-neutral-800 border-red-600/50 shadow-xl shadow-red-600/10' 
                    : 'bg-neutral-900 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-neutral-950 rounded-2xl">
                    {pkg.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${pkg.highlight ? 'bg-red-600/20 text-red-500' : 'bg-white/10 text-neutral-300'}`}>
                    {pkg.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-3">{pkg.title}</h3>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed flex-grow">{pkg.description}</p>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  pkg.highlight 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  Consultar formato <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 7 — Cierre (Footer) */}
      <footer className="bg-neutral-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-bold text-3xl italic mx-auto mb-8">V</div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6">El espacio donde las historias locales<br className="hidden md:block" /> se vuelven regionales.</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl mx-auto text-lg">
            Ofrecemos a las marcas un entorno de presencia sostenida dentro de la comunidad de Coronel Suárez y la zona.
          </p>
          
          <div className="flex justify-center gap-6 mb-20">
            <a href="#" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all">
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 text-xs border-t border-white/5 pt-8">
            <p>© {new Date().getFullYear()} RADIO DEL VOLGA. CORONEL SUÁREZ.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-neutral-400 transition-colors">MEDIA KIT COMERCIAL</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
