import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Brazilian Legal Partners</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Expert legal counsel for international corporations expanding to Brazil
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get Free Consultation
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
