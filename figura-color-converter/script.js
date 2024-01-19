document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = document.getElementById('selectedColor');
    const scaledRgbOutput = document.getElementById('scaledRgbOutput');
    const copyButton = document.getElementById('copyButton');
  
    colorPicker.addEventListener('input', function () {
      const color = colorPicker.value;
  
      // Извлечение компонентов RGB
      const rgb = hexToRgb(color);

  
      // Умножение RGB на 0.003921568627451 и вывод в строку
      const scaledRgb = scaleRgb(rgb, 0.003921568627451);
      scaledRgbOutput.textContent = `${scaledRgb.r} ${scaledRgb.g} ${scaledRgb.b}`;
    });
  
    // Функция для преобразования HEX в RGB
    function hexToRgb(hex) {
      // Удаление символа # (если он есть)
      hex = hex.replace(/^#/, '');
  
      // Преобразование HEX в RGB
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
  
      return { r, g, b };
    }
  
    // Функция для умножения RGB на масштабный коэффициент
    function scaleRgb(rgb, factor) {
      return {
        r: rgb.r * factor,
        g: rgb.g * factor,
        b: rgb.b * factor,
      };
    }

  // Инициализация Clipboard.js
  const clipboard = new ClipboardJS(copyScaledButton);

  // Обработчик события при успешном копировании
  clipboard.on('success', function (e) {
    e.clearSelection();
    console.info('Text copied to clipboard:', e.text);
  });

  // Обработчик события при ошибке копирования
  clipboard.on('error', function (e) {
    console.error('Error copying text to clipboard:', e.action);
  });

  });
  