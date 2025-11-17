export function getCellValue(cell: any): string | number | null {
  if (cell == null) return null;

  // Number
  if (typeof cell === 'number') return cell;

  // String
  if (typeof cell === 'string') return cell.trim();

  // Object dari ExcelJS (richText, formula, dll)
  if (typeof cell === 'object') {
    // Rich text
    if (cell.text) return String(cell.text).trim();

    // Formula
    if (cell.result) return String(cell.result).trim();

    // Hyperlink / dll
    if (cell.hyperlink) return String(cell.hyperlink).trim();

    // Last fallback
    return String(cell.toString?.() || '').trim();
  }

  return null;
}
