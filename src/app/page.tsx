export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-950 text-slate-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-12">
        <p className="flex w-full justify-center border-b border-slate-800 bg-slate-900/50 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Duarte CRM IA&nbsp;
          <code className="font-bold text-indigo-400">v0.1.0</code>
        </p>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Bem-vindo ao seu <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            CRM Conversacional
          </span>
        </h1>
        <p className="text-slate-400 text-lg">Aprendizado de UI/UX com Inteligência Artificial</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Card Pipeline */}
        <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-slate-900">
          <h2 className="mb-3 text-2xl font-semibold text-emerald-400 flex items-center gap-2">
            Pipeline <span>→</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Gerencie seus leads com um Kanban intuitivo e rápido.
          </p>
        </div>

        {/* Card Omnichannel */}
        <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-indigo-500/50 hover:bg-slate-900">
          <h2 className="mb-3 text-2xl font-semibold text-indigo-400 flex items-center gap-2">
            Omnichannel <span>→</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Centralize WhatsApp e Instagram em uma única tela.
          </p>
        </div>

        {/* Card Webhooks */}
        <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-amber-500/50 hover:bg-slate-900">
          <h2 className="mb-3 text-2xl font-semibold text-amber-400 flex items-center gap-2">
            Webhooks <span>→</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Capture abandonos de carrinho e novos leads automaticamente.
          </p>
        </div>
      </div>
    </main>
  );
}
