export function formatDate(dateString) {
    const date = new Date(dateString);
    
    // Получаем день, месяц и год
    const day = String(date.getDate()).padStart(2, '0');       // день с ведущим нулём
    const month = String(date.getMonth() + 1).padStart(2, '0'); // месяц с ведущим нулём (месяцы начинаются с 0)
    const year = date.getFullYear();
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    
  }