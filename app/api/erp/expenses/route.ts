import { NextRequest, NextResponse } from "next/server"
import { ExpenseSchema } from "@/lib/validations"
import { INITIAL_EXPENSES } from "@/lib/erp/initial-data"
import { ExpenseRecord } from "@/lib/erp/types"

let expensesStore: ExpenseRecord[] = [...INITIAL_EXPENSES]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const propertyId = searchParams.get("propertyId")
  const category = searchParams.get("category")

  let filtered = [...expensesStore]
  if (propertyId) {
    filtered = filtered.filter((e) => e.propertyId === propertyId || e.propertySlug === propertyId)
  }
  if (category) {
    filtered = filtered.filter((e) => e.category === category)
  }

  const totalAmount = filtered.reduce((sum, e) => sum + e.amountIdr, 0)

  return NextResponse.json({
    success: true,
    totalCount: filtered.length,
    totalAmountIdr: totalAmount,
    expenses: filtered,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const parseResult = ExpenseSchema.safeParse(body)

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Data pengeluaran tidak valid."
      return NextResponse.json({ error: firstError, issues: parseResult.error.issues }, { status: 400 })
    }

    const data = parseResult.data

    const newExpense: ExpenseRecord = {
      id: `EXP-${Math.floor(100 + Math.random() * 900)}`,
      propertyId: data.propertyId,
      propertySlug: data.propertyName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      propertyName: data.propertyName,
      category: data.category,
      description: data.description,
      amountIdr: data.amountIdr,
      date: data.date,
      recordedBy: data.recordedBy,
      vendorName: data.vendorName,
      receiptUrl: data.receiptUrl,
    }

    expensesStore.unshift(newExpense)

    return NextResponse.json({
      success: true,
      message: "Biaya operasional properti berhasil dicatat.",
      expense: newExpense,
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Gagal menyimpan data pengeluaran." },
      { status: 500 }
    )
  }
}
