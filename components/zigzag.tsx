import Image from 'next/image'

import FeatImage01 from '@/public/images/4.jpeg'
import FeatImage02 from '@/public/images/2.jpeg'
import FeatImage03 from '@/public/images/9.jpeg'
import FeatImage04 from '@/public/images/14.jpeg'
import FeatImage05 from '@/public/images/17.jpeg'
import FeatImage06 from '@/public/images/20.jpeg'
import FeatImage07 from '@/public/images/19.jpeg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Antes del 13 de abril de 2024</div>
            <h1 className="h2 mb-4">Donde comienza un poco de nuestra historia.</h1>
            <p className="text-xl text-gray-400">Y desde nuestra primera cita en el salitre, empecé por conocer a una excelente personita, y no sabía que me iba a llegar a gustar e importar tanto.</p>
          </div>
          
          <div className="grid gap-20 mb-6">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 01" />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Despues del 13 de abril de 2024</div>
            <h1 className="h2 mb-4">Que decidimos emprender este camino.</h1>
            <p className="text-xl text-gray-400">Desde acá empezamos a dejar huella de cada uno de nuestros capítulos.</p>
          </div>
          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage05} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Tienes mucho de lo que crei encontrar en un hombre</h3>
                  <p className="text-xl text-gray-400">Pasando por alguien preocupado por su familia, centrado, con metas realmente bonitas, que a la vez es muy dulce, carismático y bastante creativo, me has mostrado una faceta tan única que me haces sentir muy especial el estar a tu lado.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage06} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3"></h3>
                  <p className="text-xl text-gray-400 mb-4">Me siento bendecido de contar contigo, de que llegaras a mi vida en un momento donde me sentía solo aunque acompañado de mi familia. Mientras te conocía iba haciendo ahínco en que puedo volver a creer en alguien y pueda aprender ese tan valioso consejo de "hacer las cosas con paciencia". Ahora espero que sigamos llenando este o cualquier otro diario con muchos bonitos recuerdos y tengas certeza de que estoy bien enamorado tuyo, y espero mejorar mis acciones día a día para llegar a ser el hombre que mereces.</p>
                  
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Y desde aca seguimos seguir escribiendo nuestra historia</h3>
                  <p className="text-xl text-gray-400 mb-4">Espero que esta carta se siga escribiéndo, y que sigamos aprendiendo mucho del otro en nuevas y locas historias.</p>
                </div>
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage07} width={540} height={405} alt="Features 01" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
