const input = document.getElementById('dynamic-input');
            
input.addEventListener('input', function() {
    this.style.width = (this.value.length + 1) + 'ch'; // 根據字元數調整寬度
});