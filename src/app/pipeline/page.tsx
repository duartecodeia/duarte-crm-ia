export default function PipelinePage() {
  const columns = [
    { id: 'leads', title: 'Novos Leads', color: 'border-t-indigo-500' },
    { id: 'contact', title: 'Em Contato', color: 'border-t-amber-500' },
    { id: 'negotiation', title: 'Negociação', color: 'border-t-emerald-500' },
    { id: 'closed', title: 'Fechado', color: 'border-t-slate-500' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-slate-50">Pipeline de Vendas</h1>
            <p className="text-slate-400">Gerencie o progresso dos seus leads</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            + Novo Lead
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {columns.map((column) => (
            <div 
              key={column.id} 
              className={`bg-slate-900/40 border border-slate-800 border-t-4 ${column.color} rounded-xl p-4 min-h-[70vh]`}
            >
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 flex justify-between">
                {column.title}
                <span className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs">0</span>
              </h3>
              
              <div className="space-y-4">
                {/* Exemplo de Card Vazio */}
                <div className="border border-dashed border-slate-800 rounded-lg p-8 text-center">
                  <p className="text-xs text-slate-600">Nenhum lead aqui</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
