import { Fonctionnalites } from "./components/layout/Fonctionnalites"
import { Header } from "./components/layout/Header"
import { Plans } from "./components/layout/Plans"
import { ProductPage } from "./components/layout/ProductPage"

export const App = () => {
  return (
    <div>
      <Header />
      <ProductPage />
      
      <Fonctionnalites />
      <Plans />
    </div>
  )
}
