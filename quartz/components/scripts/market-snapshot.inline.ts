function snapshotHighlight() {
  document.querySelectorAll<HTMLElement>(".table-container table").forEach((table) => {
    const headerCell = table.querySelector("thead th:nth-child(5)")
    if (!headerCell) return
    const label = (headerCell.textContent || "").toLowerCase()
    if (!label.includes("change") && !label.includes("涨跌") && !label.includes("chg")) return

    const rows = table.querySelectorAll("tbody tr")
    rows.forEach((row) => {
      const cell = row.querySelector<HTMLElement>("td:nth-child(5)")
      if (!cell) return

      const value = parseFloat(cell.textContent.trim())
      if (isNaN(value)) return

      let bg = ""
      if (value >= 5) bg = "rgba(0,180,0,0.18)"
      else if (value > 2) bg = "rgba(0,200,0,0.08)"
      else if (value <= -5) bg = "rgba(220,0,0,0.18)"
      else if (value < -2) bg = "rgba(220,0,0,0.08)"

      if (bg) {
        cell.style.backgroundColor = bg
        cell.style.borderRadius = "3px"
      }
    })
  })
}

document.addEventListener("nav", snapshotHighlight)
snapshotHighlight()
