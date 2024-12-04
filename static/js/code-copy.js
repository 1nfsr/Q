document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.highlight').forEach((block) => {
    // Add language label
    const code = block.querySelector('code');
    const language = code.className.match(/language-(\w+)/)?.[1] || 'text';
    const label = document.createElement('span');
    label.className = 'language-label';
    label.textContent = language;
    block.appendChild(label);

    // Add copy button
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = `
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      </svg>
      <span>Copy</span>
    `;
    
    button.onclick = async () => {
      const code = block.querySelector('code').innerText;
      await navigator.clipboard.writeText(code);
      button.innerHTML = '<span>Copied!</span>';
      setTimeout(() => {
        button.innerHTML = `
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          </svg>
          <span>Copy</span>
        `;
      }, 2000);
    };
    // Create header container
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    
    // Move label and button into header container
    block.removeChild(label);
    headerContainer.appendChild(label);
    headerContainer.appendChild(button);
    
    // Insert header container at the beginning of block
    block.insertBefore(headerContainer, block.firstChild);
    
    // Remove button from being appended directly to block
    return;
    block.appendChild(button);
  });
}); 