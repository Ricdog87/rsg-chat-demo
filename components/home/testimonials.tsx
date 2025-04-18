import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Elumalab hat unsere Kundenkommunikation komplett verändert. Die WhatsApp-Integration ist nahtlos und unsere Reaktionszeiten haben sich um 70% verbessert.",
      author: "Sarah Müller",
      position: "Marketing Direktorin",
      company: "StyleBoutique",
      avatar: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote:
        "Der KI-Chatbot bearbeitet 80% unserer Routineanfragen und entlastet unser Team, damit es sich auf komplexe Kundenanliegen konzentrieren kann. Es ist wie ein zusätzliches Teammitglied, das rund um die Uhr arbeitet.",
      author: "Michael Weber",
      position: "Customer Success Manager",
      company: "TechSolutions GmbH",
      avatar: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote:
        "Seit der Implementierung von Elumalab haben wir eine 40%ige Steigerung des Kundenengagements verzeichnet. Die Analysen liefern wertvolle Erkenntnisse, die uns helfen, unsere Kommunikationsstrategie kontinuierlich zu verbessern.",
      author: "Laura Martinez",
      position: "E-Commerce Leiterin",
      company: "Urban Essentials",
      avatar: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Von innovativen Unternehmen vertraut</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, was unsere Kunden darüber sagen, wie Elumalab ihre Kundenkommunikation transformiert hat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50 to-orange-50 p-1 rounded-2xl">
              <div className="bg-white p-6 rounded-xl h-full flex flex-col">
                <div className="flex mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              src={`/images/logo-${num}.svg`}
              alt={`Firmenlogo ${num}`}
              width={120}
              height={40}
              className="h-8 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
