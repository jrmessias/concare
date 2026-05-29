import {Header} from "#components/header.jsx";

function EncontrarCuidador() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Encontrar Cuidador</h2>
          <p className="text-xl text-gray-600 mb-8">
            Preencha os filtros abaixo para encontrar o cuidador ideal para sua necessidade.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl border max-w-2xl mx-auto">
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Cuidado</label>
              <select className="w-full px-4 py-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Selecione...</option>
                <option>Cuidado de Idosos</option>
                <option>Cuidados Paliativos</option>
                <option>Cuidados Pós-Operatórios</option>
                <option>Cuidados Especiais</option>
                <option>Assistência Domiciliar</option>
                <option>Acompanhamento Terapêutico</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Localização</label>
              <input type="text" placeholder="Cidade ou CEP" className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilidade</label>
              <select className="w-full px-4 py-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Qualquer horário</option>
                <option>Período da manhã</option>
                <option>Período da tarde</option>
                <option>Período noturno</option>
                <option>Integral</option>
              </select>
            </div>
            <button className="w-full py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors">
              Buscar Cuidadores
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EncontrarCuidador
