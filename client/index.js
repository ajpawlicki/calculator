window.onload = () => {
  const form = document.getElementById('calc-form');
  const pre = document.getElementById('pre');
  const post = document.getElementById('post');
  const operator = document.getElementById('operator');
  const result = document.getElementById('result');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (pre.value.length && post.value.length) {
      const data = {
        pre: pre.value,
        post: post.value,
        operator: operator.value
      };
      
      $.post('/calculate', data, (ans) => {
        result.innerHTML = '';
        result.innerHTML = ans;
      });

    } else {
      result.innerHTML = 'Please provide two valid numbers';
    }
  });
};