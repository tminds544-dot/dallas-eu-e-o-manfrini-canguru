import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from './ProductCard';

export default function CatalogSection() {
  const [selectedLeague, setSelectedLeague] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');

  const leagues = [
    { id: 'premier', name: 'Premier League' },
    { id: 'laliga', name: 'La Liga' },
    { id: 'serie-a', name: 'Serie A' },
    { id: 'bundesliga', name: 'Bundesliga' }
  ];

  const teams: Record<string, string[]> = {
    'premier': ['Manchester United', 'Liverpool', 'Arsenal', 'Chelsea'],
    'laliga': ['Real Madrid', 'Barcelona', 'Atlético Madrid', 'Sevilla'],
    'serie-a': ['Juventus', 'Milan', 'Inter', 'Roma'],
    'bundesliga': ['Bayern München', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen']
  };

  const mockProducts = {
    trending: [
      { id: '1', name: 'Camisa Home 2024', price: 299.90, image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400', team: 'Manchester United' },
      { id: '2', name: 'Camisa Retrô 2005', price: 349.90, image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', team: 'Barcelona' }
    ],
    regular: [
      { id: '3', name: 'Camisa Away 2024', price: 279.90, image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', team: 'Liverpool' },
      { id: '4', name: 'Camisa Third 2023', price: 259.90, image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400', team: 'Arsenal' }
    ]
  };

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-white mb-6">Catálogo Interativo</h2>
      
      <div className="space-y-6">
        {/* Seleção de Liga */}
        <div>
          <label className="text-gray-300 mb-2 block">Selecione a liga</label>
          <select
            value={selectedLeague}
            onChange={(e) => {
              setSelectedLeague(e.target.value);
              setSelectedTeam('');
            }}
            className="w-full bg-gray-900 text-white border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#76FF03] transition-colors"
          >
            <option value="">Escolha uma liga</option>
            {leagues.map(league => (
              <option key={league.id} value={league.id}>{league.name}</option>
            ))}
          </select>
        </div>

        {/* Seleção de Time */}
        <AnimatePresence>
          {selectedLeague && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <label className="text-gray-300 mb-2 block">Selecione o time</label>
              <div className="grid grid-cols-2 gap-3">
                {teams[selectedLeague]?.map(team => (
                  <motion.button
                    key={team}
                    onClick={() => setSelectedTeam(team)}
                    className={`p-4 rounded-lg border transition-all ${
                      selectedTeam === team
                        ? 'bg-[#76FF03] text-black border-[#76FF03] font-bold'
                        : 'bg-gray-900 text-white border-gray-800 hover:border-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {team}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Produtos */}
        <AnimatePresence>
          {selectedTeam && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Em alta 🔥</h3>
                <div className="grid grid-cols-2 gap-4">
                  {mockProducts.trending.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Outros modelos</h3>
                <div className="grid grid-cols-2 gap-4">
                  {mockProducts.regular.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
