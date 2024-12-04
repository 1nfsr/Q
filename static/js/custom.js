function toggleAdmonition(element) {
  const content = element.querySelector('.admonition-content');
  const arrow = element.querySelector('.admonition-title svg:last-child');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    content.style.display = 'none';
    arrow.style.transform = 'rotate(-90deg)';
  }
}

