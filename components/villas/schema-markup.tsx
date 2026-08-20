import { Villa } from "@/lib/types"
import { generateVacationRentalSchema } from "@/lib/utils"

interface SchemaMarkupProps {
  villa: Villa
}

export function SchemaMarkup({ villa }: SchemaMarkupProps) {
  const schema = generateVacationRentalSchema(villa)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
