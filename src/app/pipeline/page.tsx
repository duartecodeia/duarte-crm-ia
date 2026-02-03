import Link from 'next/link';

export default function PipelinePage() {
  const columns = [
    { id: 'leads', title: 'Novos Leads', color: 'bg-indigo-500', bg: 'bg-indigo-500/5' },
    { id: 'contact', title: 'Em Contato', color: 'bg-amber-500', bg: 'bg-amber-500/5' },
    { id: 'negotiation', title: 'Negociação', color: 'bg-emerald-500', bg: 'bg-emerald-500/5' },
    { id: 'closed', title: 'Fechado', color: 'bg-slate-500', bg: 'bg-slate-500/5' },
  ];

  const leads = [
    { id: 1, name: 'Duarte Code IA', company: 'Antigravity', value: 'R$ 5.000', status: 'leads', time: '2h ago' },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 p-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              ← Voltar
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Pipeline de Vendas</h1>
              <p className="text-sm text-slate-400">Fluxo de leads em tempo real</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20">
            + Adicionar Lead
          </button>
        </header>

        {/* Board */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {columns.map((column) => (
            <div 
              key={column.id} 
              className={`rounded-2xl border border-slate-800/60 ${column.bg} p-4 flex flex-col min-h-[75vh]`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-6 px-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${column.color}`}></div>
                  <h3 className="font-bold text-slate-200 text-sm uppercase tracking-widest">{column.title}</h3>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-full">
                  {leads.filter(l => l.status === column.id).length}
                </span>
              </div>

              {/* Cards Container */}
              <div className="flex-1 space-y-4">
                {leads.filter(l => l.status === column.id).map((lead) => (
                  <div 
                    key={lead.id}
                    className="bg-slate-900/80 border border-slate-700/50 p-4 rounded-xl shadow-sm hover:border-indigo-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                        Hotmart
                      </span>
                      <span className="text-[10px] text-slate-500">{lead.time}</span>
                    </div>
                    <h4 className="font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">{lead.name}</h4>
                    <p className="text-xs text-slate-400 mb-4">{lead.company}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-slate-800/50">
                      <span className="text-xs font-mono font-bold text-emerald-400">{lead.value}</span>
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full bg-slate-700 border border-slate-900"></div>
                      </div>
                    </div>
                  </div>
                ))}

                {leads.filter(l => l.status === column.id).length === 0 && (
                  <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-800/30 rounded-xl m-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-700 font-bold">Vazio</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
