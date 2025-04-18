import Image from "next/image"

export function Integrations() {
  const integrations = [
    { name: "Shopify", logo: "/images/integration-shopify.svg" },
    { name: "Salesforce", logo: "/images/integration-salesforce.svg" },
    { name: "HubSpot", logo: "/images/integration-hubspot.svg" },
    { name: "Zapier", logo: "/images/integration-zapier.svg" },
    { name: "Google Sheets", logo: "/images/integration-google-sheets.svg" },
    { name: "Slack", logo: "/images/integration-slack.svg" },
    { name: "WooCommerce", logo: "/images/integration-woocommerce.svg" },
    { name: "Zendesk", logo: "/images/integration-zendesk.svg" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nahtlose Integrationen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verbinden Sie Elumalab mit Ihren bevorzugten Tools und Plattformen, um einen einheitlichen Workflow zu
            schaffen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <p className="font-medium text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Und viele weitere Integrationen über unsere API und Zapier verfügbar</p>
          <a href="#" className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center">
            Alle Integrationen anzeigen
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
