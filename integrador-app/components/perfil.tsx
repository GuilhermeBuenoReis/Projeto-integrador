import { useState } from 'react'

function Perfil() {
  const [listOpen, setlistOpen] = useState(false)

  const toggleList = () => {
    setlistOpen(!listOpen)
  }
  return (
    <div>
      <button
        onClick={toggleList}
        className="border-2 rounded-full h-8 w-8 mt-2"
      ></button>
      {listOpen && (
        <div className="absolute top-10 right-0 bg-white p-2 shadow-md">
          <ul>
            <li>Seu perfil</li>
            <li>Configurações</li>
            <li>Sua vóvó</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Perfil
