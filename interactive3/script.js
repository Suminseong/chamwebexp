const fontTypeRadios = document.querySelectorAll('input[name="font-type"]');
const settingTabs = document.querySelectorAll('.setting-tab');
const previewText = document.getElementById('preview-text');
const inputText = document.getElementById('input-text');
const fontSizeRange = document.getElementById('font-size');
const boldCheckbox = document.getElementById('bold');
const italicCheckbox = document.getElementById('italic');
const letterSpacingRange = document.getElementById('letter-spacing');
const handFontSizeRange = document.getElementById('hand-font-size');
const handLetterSpacingRange = document.getElementById('hand-letter-spacing');
const spanSpacing = document.querySelector('.spacing-value');
const spanFont = document.querySelector('.font-value');



const cssPropertiesTextarea = document.getElementById('css-properties');

// Update CSS properties textarea
const applyCssButton = document.getElementById('apply-css-btn');

applyCssButton.addEventListener('click', applyCssProperties);

function applyCssProperties() {
    const fontFamily = previewText.style.fontFamily || window.getComputedStyle(previewText).fontFamily;
    const fontSize = previewText.style.fontSize || window.getComputedStyle(previewText).fontSize;
    const fontWeight = previewText.style.fontWeight || window.getComputedStyle(previewText).fontWeight;
    const fontStyle = previewText.style.fontStyle || window.getComputedStyle(previewText).fontStyle;
    const letterSpacing = previewText.style.letterSpacing || window.getComputedStyle(previewText).letterSpacing;

    const cssText = `
    Font Family: ${fontFamily};
    Font Size: ${fontSize};
    Font Weight: ${fontWeight};
    Font Style: ${fontStyle};
    Letter Spacing: ${letterSpacing};
    `;

    cssPropertiesTextarea.value = cssText;
}

window.addEventListener('load', () => {
    document.querySelector('input[value="serif"]').checked = true;
    document.querySelector('.setting-display').style.display = 'block';
    previewText.style.fontFamily = "'Noto Serif KR', serif";
});

fontTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedValue = document.querySelector('input[name="font-type"]:checked').value;
        settingTabs.forEach(tab => {
            tab.style.display = 'none';
        });
        if (selectedValue === 'serif' || selectedValue === 'sans-serif') {
            document.querySelector('.setting-display').style.display = 'block';
        } else if (selectedValue === 'handwriting') {
            document.querySelector('.setting-hand').style.display = 'block';
        }
        if (selectedValue === 'serif') {
            previewText.style.fontFamily = "'Noto Serif KR', serif";
        } else if (selectedValue === 'sans-serif') {
            previewText.style.fontFamily = "'Noto Sans KR', sans-serif";
        } else if (selectedValue === 'handwriting') {
            previewText.style.fontFamily = "'Nanum Pen Script', cursive";
        }
    });
});

inputText.addEventListener('input', () => {
    previewText.innerText = inputText.value || "Your preview text will appear here.";
});

// Apply font size, bold, italic, letter spacing
fontSizeRange.addEventListener('input', () => {
    previewText.style.fontSize = fontSizeRange.value + 'px';
    spanFont.innerText = fontSizeRange.value;
});

boldCheckbox.addEventListener('change', () => {
    previewText.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
});

italicCheckbox.addEventListener('change', () => {
    previewText.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
});

letterSpacingRange.addEventListener('input', () => {
    previewText.style.letterSpacing = letterSpacingRange.value + 'px';
    spanSpacing.innerText = letterSpacingRange.value;
});

handFontSizeRange.addEventListener('input', () => {
    previewText.style.fontSize = handFontSizeRange.value + 'px';
});

handLetterSpacingRange.addEventListener('input', () => {
    previewText.style.letterSpacing = handLetterSpacingRange.value + 'px';
});
